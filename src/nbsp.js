const NBSP_ENTITIY = '&nbsp;'

// o mne => o+mne
const replaceForShortWords = (value) => {
	const rule = /[\s.,!?]([aikosuvz])\s/gi;
	const transform = ' ' + '$1' + NBSP_ENTITIY;
	const paddedValue = ' ' + value;
	return paddedValue.replace(rule, transform).substr(1);
}

// 100 000 => 100+000
// 20 % => 20+%
const replaceForNumbers = (value) => {
	const rule = /(\d) (?=[\d|%])/gi;
	const transform = '$1' + NBSP_ENTITIY;
	return value.replace(rule, transform);
}

// 5. snem => 5.+snem
// 1. 1. 2020 => 1.+1.+2020
const replaceForOrdinalNumbers = (value) => {
	const rule = /(\d\.) (?=\w)/gi;
	const transform = '$1' + NBSP_ENTITIY;
	return value.replace(rule, transform);
}


const nbsp = (value) => {
	const shortWords = replaceForShortWords(value);
	const numbers = replaceForNumbers(shortWords);
	const ordinalNumbers = replaceForOrdinalNumbers(numbers);

	return ordinalNumbers;
};

export default nbsp;
