import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
	try {
		const response = await axios.get<T>(url);
		return response.data;
	} catch (error) {
		throw new Error(`Error fetching from ${url}: ${error}`);
	}
}

interface Todo {
	userId: number;
	id: number;
	titile: string;
	completed: boolean;
}

fetchData<Todo>('https://jsonplaceholder.typicode.com/todos/1')
	.then((data) => console.log(data))
	.catch((error) => console.error(error.message));
