import numbertText from './numberText'

const percentText = (value) => {
	const percentageNumber = Math.round(Number(value) * 100);
	const percentage = numbertText(percentageNumber);
	return `${percentage} percent`;
}

export default percentText;
