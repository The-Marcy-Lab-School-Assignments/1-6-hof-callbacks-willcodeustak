/** FEEDBACK: Great job getting all test cases to pass, in the future ensure to remove any commented out code! I love that you are commenting on how things work!  */
// const myForEach = (arr, result) => {
//   for (let i = 0; i < 10; i++) {
//     const arr = ["Alice", "Bob", "Charlie", "Debbie"];
//     const result = myForEach(arr, (name) => console.log(`Hi, ${name}!`));
//     console.log(result); // undefined
//     console.log(arr);
//   }
// };
// console.log(myForEach());

const myForEach = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}
};

const myNames = ['Alice', 'Bob', 'Charlie', 'Debbie'];

myForEach(myNames, (names) => console.log(`Hi, ${names}!`));

const myMap = (arr, callback) => {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(callback(arr[i]));
	}
	return result;
};

const myNums = [1, 4, 9, 16];

const myDoubledNums = myMap(myNums, (x) => x * 2);

// console.log(myNums);

// console.log(myDoubledNums);

const myFind = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i])) {
			return arr[i];
		}
	}
	return undefined;
};

const myAngles = ['Acute', 'Right', 'Obtuse'];

const triangleHasR = myFind(myAngles, (tri) => tri.includes('R'));
console.log(triangleHasR);

const triangleHasZ = myFind(myAngles, (tri) => tri.includes('Z'));
console.log(triangleHasZ);

const myFilter = (arr, callback) => {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
};

const sortWords = (words) => {
	// Create a copy of the array to avoid modifying the original array
	const sortedW = [...words];
	// Sort the copied array in ascending alphabetical order
	sortedW.sort();
	return sortedW;
};
//return [...words].sort()

const unsortedNames = ['Charlie', 'Debbie', 'Alice', 'Bob'];
const sortedNames = sortWords(unsortedNames);

console.log(sortedNames); // Output: ['Alice', 'Bob', 'Charlie', 'Debbie']
console.log(unsortedNames); // Output: ['Charlie', 'Debbie', 'Alice', 'Bob']

const sortNumbers = (nums) => {
	const sortedN = [...nums];
	sortedN.sort((a, b) => a - b);
	return sortedN;
};
const unsortedNums = [1, 100, 14, 3, 2, 11];
const sortedNums = sortNumbers(unsortedNums);
// console.log(unsortedNums);

// console.log(sortedNums);

{
}

const sortNumbersBetter = (nums, isDescending = false) => {
	const sortedN = [...nums];
	sortedN.sort((a, b) => {
		if (isDescending) {
			return b - a; // Sort descending
		} else {
			return a - b; // Sort ascending (default behavior)
		}
	});
	return sortedN;
};

const sortUsersByOrder = (users) => {
	const sortedUsers = [...users];
	sortedUsers.sort((a, b) => a.order - b.order);
	return sortedUsers;
};

const sortUsersByName = (usersname) => {
	const sortedUsersN = [...usersname];
	sortedUsersN.sort((a, b) => {
		//  ensure case-insensitive sorting
		const nameA = a.name.toLowerCase();
		const nameB = b.name.toLowerCase();

		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}

		//if equal
		return 0;
	});
	return sortedUsersN;
};

module.exports = {
	myForEach,
	myMap,
	myFind,
	myFilter,

	sortWords,
	sortNumbers,
	sortNumbersBetter,
	sortUsersByOrder,
	sortUsersByName,
};

/*

input.map




*/
