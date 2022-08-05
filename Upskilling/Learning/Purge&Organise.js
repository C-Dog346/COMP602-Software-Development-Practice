function uniqueSort(array) {
	let newArray = [];
	
	array.sort(function(a, b) {
		return a - b;
	});
	
	let x = 0;
	for (let index = 0; index < array.length; index++) {
		if (newArray[index-1-x] != array[index])
			newArray[index-x] = array[index];
		else
			x++;
	}

	return newArray;
}

console.log(uniqueSort([1, 2, 4, 3]));
console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]));
console.log(uniqueSort([6, 7, 3, 2, 1]));