import numberText from './numberText';
import plural from './plural';

const extractWholeNumber = (value) => {
	return Math.floor(value);
}

const extractDecimalValue = (value) => {
	const change = value % 1;
	const cents = Math.round(change * 100);
	return cents;
}

const currencyText = (value) => {
	const numVal = Number(value);
	const euros = extractWholeNumber(numVal);
	const cents = extractDecimalValue(numVal);
	const eurosText = plural(euros, ['euro', 'eurá', 'eur'], { numberTransformer: numberText });

	if(!cents) {
		return eurosText
	} else {
		const centsText = plural(cents, ['cent', 'centy', 'centov'], { numberTransformer: numberText });
		return `${eurosText} ${centsText}`;
	}
}

export default currencyText;
