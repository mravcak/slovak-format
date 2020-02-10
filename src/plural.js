import number from './number';
import stretchArray from './lib/stretchArray';
import isFractional from './lib/isFractional';

// Determines which form to use based on value
const determineForm = (value) => {
	const absValue = Math.abs(value)
	if(isFractional(absValue)) {
		return 3;
	}
	switch(absValue) {
		case 1: return 0;
		case 2: return 1;
		case 3: return 1;
		case 4: return 1;
		default: return 2;
	}
}

const getPluralForm = (value, forms) => {
	const formToUse = determineForm(value);
	const stretchedForms = stretchArray(forms, 4);
	return stretchedForms[formToUse];
};

const plural = (value, forms, options = {}) => {
	const activeOptions = {
		inclusive: true,
		separator: ' ',
		numberTransformer: number,
		...options,
	}

	const pluralWord = getPluralForm(value, forms);

	if (activeOptions.inclusive) {
		return activeOptions.numberTransformer(value) + activeOptions.separator + pluralWord;
	} else {
		return pluralWord;
	}
};

export default plural;
