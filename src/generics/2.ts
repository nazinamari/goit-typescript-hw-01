type AllType = {
	name: string;
	position: number;
	color: string;
	weight: number;
};

function compare<
	T extends Pick<AllType, 'name' | 'color'>,
	U extends Pick<AllType, 'position' | 'weight'>
>(top: T, bottom: U): AllType {
	return {
		name: top.name,
		color: top.color,
		position: bottom.position,
		weight: bottom.weight,
	};
}

const topObject = { name: 'Vlad', color: 'Red' };
const bottomObject = { position: 30, weight: 65 };

const result = compare(topObject, bottomObject);

console.log(result);
