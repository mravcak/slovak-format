const percent = (value, showDecimals) => {
	const numVal = Number(value);

	if(isNaN(numVal)) throw 'Value for slovak-format/percent has to be number';

	return numVal.toLocaleString('sk', {
		style: 'percent',
		minimumFractionDigits: 0,
		maximumFractionDigits: showDecimals ? 2 : 0,
	})
}

export default percent;
