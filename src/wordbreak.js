const JOINER = '&shy;';

const processSyllableDivision = (match, before, div) => {
	if (div.length <= 1) {
		return before + JOINER + div;
	} else {
		return before + div.slice(0, 1) + JOINER + div.slice(1);
	}
}

const processWord = (word) => {
	const rule = /([aeiyouáéíýóúrlŕĺ])([a-ž]+?)(?=[aeiyouáéíýóúrlŕĺ])/gi;
	return word.replace(rule, processSyllableDivision);
}

const processText = (text) => {
	const rule = /([a-ž]+)/gi;
	return text.replace(rule, processWord);
}

const breakword = (value) => {
	return processText(value);
}

export default breakword;
