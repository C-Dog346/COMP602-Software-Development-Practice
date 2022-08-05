function happyYear(year) {
	year++;
	while (true) {
		let happyYear = true;
		let array = Array.from(String(year), Number);
		for (let i = 0; i < array.length; i++) {
			for (let j = 0; j < array.length; j++) {
				if (i != j)
					if (array[i] == array[j])
						happyYear = false;
			}	
		}
		if (happyYear)
			return year;
		else
			year++;
	}
}


console.log(happyYear(2017));
console.log(happyYear(1990));
console.log(happyYear(2021));