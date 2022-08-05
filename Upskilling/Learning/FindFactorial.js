function FirstFactorial1(num) { 
	let numFac = num;
  
	for (let i = num-1; i > 0; i--) {
	  numFac *= i;
	}
  
	return numFac; 
}

function FirstFactorial2(num) {
	let total = num;
	
	return FirstFactorialRecursive(num-1, total); 
}

function FirstFactorialRecursive(num, total) {
	if (num != 0) {
		total *= num;	
	}
	else {
		return total;
	} 
	
	return FirstFactorialRecursive(num-1, total); 
}

console.log(FirstFactorial1(1));
console.log(FirstFactorial2(1));

console.log(FirstFactorial1(2));
console.log(FirstFactorial2(2));

console.log(FirstFactorial1(3));
console.log(FirstFactorial2(3));

console.log(FirstFactorial1(4));
console.log(FirstFactorial2(4));

console.log(FirstFactorial1(8));
console.log(FirstFactorial2(8));
