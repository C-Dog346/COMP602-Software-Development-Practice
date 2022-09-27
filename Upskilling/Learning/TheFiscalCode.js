// https://edabit.com/challenge/Pa2rHJ6KeRBTF28Pg

/*
Encode a persons identifying details into an 11 character code string

first 3 cap letters = surname
	first three consonants
		less than 3? after consonants use vowels in order they appear
			less than 3 characters (e.g. 'Yu')? add X

next 3 cap letters = first name
	if 3 consonants exactly, use those 3
		if more than 3, use consonants 1 3 and 4
			less than 3 consonants? after consonants use vowels in the order the appear
				less than 3 letters?
					add X

2 numbers, 1 letter and 2 more numbers from DOB and gender
	last two digits of the year of birth
	letter corresponding to the month of birth (see months dict)
	For males, take the DOB adding one zero if the start is less than 10 (e.g. 9 = 09. 20 = 20)
	For females, take the DOB adding fourty (e.g. 9 = 49. 20 = 60)

NOTES:
	Y is not a vowel
	Code letters are uppercase
	DOB is D/M/YYYY
*/

const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" };

const vowels = ['A', 'E', 'I', 'O', 'U'];

function fiscalCode(person) {
	let fiscalCode = "";

	let surname = person.surname.toUpperCase().split('');
	let surnameCode = "";
	let count = 0;

	if (surname.length < 3) {
		surnameCode += person.surname.toUpperCase();
		for (let index = surnameCode.length; index < 3; index++) {
			surnameCode += 'X';
		}
	}

	for (let index = surnameCode.length; index < surname.length; index++) {
		if (!vowels.includes(surname[index])) {
			surnameCode += surname[index];
			count++;
		}
		if (count == 3)
			index = surname.length;
	}

	if (surnameCode.length < 3)
		for (let index = 0; index < surname.length; index++) {
			if (vowels.includes(surname[index])) {
				surnameCode += surname[index];
				count++;
			}
			if (count == 3)
				index = surname.length;
		}
		 
	let firstName = person.firstName.toUpperCase().split('');
	let firstNameCode = "";
	count = 0;

	if (firstName.length < 3) {
		firstNameCode += person.firstName.toUpperCase();
		for (let index = firstNameCode.length; index < 3; index++) {
			firstNameCode += 'X';
		}
	}

	for (let index = firstNameCode.length; index < firstName.length; index++) {
		if (!vowels.includes(firstName[index])) {
			firstNameCode += firstName[index];
			count++;
		}
	}

	if (count > 3) {
		let tempFirstNameCode = firstNameCode.slice(0,1);
		tempFirstNameCode += firstNameCode.slice(2,4);
		firstNameCode = tempFirstNameCode;
	}

	if (firstNameCode.length < 3)
		for (let index = 0; index < firstName.length; index++) {
			if (vowels.includes(firstName[index])) {
				firstNameCode += firstName[index];
				count++;
			}
			if (count == 3)
				index = firstName.length;
		}
	
	let dob = person.dob.split('/');
	let tempDob = dob[dob.length-1].split('');
	let dobCode = tempDob[tempDob.length-2] + tempDob[tempDob.length-1]; 
	dobCode += months[dob[1]];

	let genderCode = person.gender == 'M' ? (dob[0] < 10 ? '0' + dob[0] : dob[0]) : Number(dob[0]) + 40;

	fiscalCode += surnameCode;
	fiscalCode += firstNameCode;
	fiscalCode += dobCode;
	fiscalCode += genderCode;

	return fiscalCode;
}

console.log(fiscalCode({
	firstName: "Matt",
	surname: "Edabit",
	dob: "1/1/1900",
	gender: "M"	
}))
  
console.log(fiscalCode({
	firstName: "Helen",
	surname: "Yu",
	dob: "1/12/1950",
	gender: "F"	
}))

console.log(fiscalCode({
	firstName: "Mickey",
	surname: "Mouse",
	dob: "16/1/1928",
	gender: "M"
}))

console.log(fiscalCode({
	firstName: "Callum",
	surname: "Clow",
	dob: "25/9/2002",
	gender: "M"
}))

console.log(fiscalCode({
	firstName: "Jack",
	surname: "Briggs",
	dob: "1/9/2002",
	gender: "M"
}))