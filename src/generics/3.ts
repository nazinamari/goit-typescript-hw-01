function merge<T, U>(objA: T, objB: U): T & U {
	return Object.assign({}, objA, objB);
}

const objA = { name: 'Alice' };
const objB = { age: 30 };

const mergedObj = merge(objA, objB);
console.log(mergedObj);
