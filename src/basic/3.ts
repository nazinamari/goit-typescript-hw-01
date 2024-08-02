let value: string | number;

let status: 'enable' | 'disable';

value = 'Hello';
status = 'enable';

console.log(value, status);

value = 42;
status = 'disable';

console.log((value = 42), (status = 'disable'));
