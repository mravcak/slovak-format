const currency = (value, showCents = true) => {
	const numVal = Number(value);

	if(isNaN(numVal)) throw 'Value for slovak-format/currency has to be number';

	return numVal.toLocaleString('sk', {
		style: 'currency',
		currency: 'EUR',
		currencyDisplay: 'symbol',
		useGrouping: true,
		minimumFractionDigits: 0,
		maximumFractionDigits: showCents ? 2 : 0,
	})
}

export default currency;
