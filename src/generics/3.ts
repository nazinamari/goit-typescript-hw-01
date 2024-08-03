type Person = {
	name: string;
};

type Age = {
	age: number;
};

function merge<T, U>(objA: T, objB: U): T & U {
	return Object.assign({}, objA, objB);
}

const objA: Person = { name: 'Alice' };
const objB: Age = { age: 30 };

const mergedObj = merge(objA, objB);
console.log(mergedObj);
