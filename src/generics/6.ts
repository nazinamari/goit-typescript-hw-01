type Errors = {
	email?: string[];
	firstName?: string[];
	lastName?: string[];
	phone?: string[];
};

type Form = {
	email: string | null;
	firstName: string | null;
	lastName: string | null;
	phone: string | null;
	errors: Errors;
};

// Реалізуйте Params так,
// щоб унеможливити поле 'errors' з типу Form
type Params = Omit<Form, 'errors'>;

function printParams(params: Params) {
	console.log('Email:', params.email);
	console.log('First Name:', params.firstName);
	console.log('Last Name:', params.lastName);
	console.log('Phone:', params.phone);
}

// Приклад використання Params
const exampleParams: Params = {
	email: 'example@example.com',
	firstName: 'John',
	lastName: 'Doe',
	phone: '123-456-7890',
};

printParams(exampleParams);
