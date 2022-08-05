function minMax(array) {
	let newArray = [];
	
	array.sort(function(a, b) {
		return a - b;
	  });

	newArray[0] = array[0];
	newArray[1] = array[array.length-1];
	
	return newArray;
  }

  console.log(minMax([1, 2, 3, 4, 6, 5]));