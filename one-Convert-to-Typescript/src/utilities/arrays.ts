// Concatenate two arrays

const concatArr = (arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] => {
	return [...arr1, ...arr2];
};
  
// Add numbers in an array
  
const addArr = (arr: number[]): number => {
	let total = 0;
	arr.forEach((x) => {
		total += x;
	});
	return total;
};

// Find the largest number in an array
const lgNum = (arr: (number | string)[]): number => {
	let largest = 0 as number;

	arr.forEach((x) => {
		if (x > largest) {
			largest = x as number;
		}
	});
	return largest;
};

// Remove the 3rd item from an array
const cut3 = (arr: (number | string)[]): (number | string)[] => {
	arr.splice(2, 1);
	return arr;
};

interface Arrays {
  concatArr(arr1: (number | string)[], arr2: (number | string)[]): (number | string)[];
  addArr(arr: number[]): number;
  lgNum(arr: number[]): number;
  cut3(arr: (number | string)[]): (number | string)[];
}

const arrays: Arrays = {
	concatArr,
	addArr,
	lgNum,
	cut3
};

export default arrays;
  