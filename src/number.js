const number = (value) => {
	const numVal = Number(value);

	if(isNaN(numVal)) throw 'Value for slovak-format/number has to be number'

	return numVal.toLocaleString('sk', {
		useGrouping: true,
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	})
}

export default number;
