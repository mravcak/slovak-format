// Stretches array, repeating the last element until desired length is reached
const stretchArray = (array, desiredLength) => {
	const stretched = [];

	for (let i = 0; i < desiredLength; i++) {
		stretched.push(array.length > i ? array[i] : array[array.length - 1]);
	}
	return stretched;
}

export default stretchArray;