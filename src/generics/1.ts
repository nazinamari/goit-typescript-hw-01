import axios from 'axios';

async function fetchData(url: string): Promise<any> {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		throw new Error(`Error fetching from ${url}: ${error}`);
	}
}

fetchData('https://jsonplaceholder.typicode.com/todos/1')
	.then((data) => console.log(data))
	.catch((error) => console.error(error.message));
