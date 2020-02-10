const replaceDoubleQuotes = (value) => {
	const rule = /(")(.+?)(")/gi;
	return value.replace(rule, '„$2“');
}

const replaceSingleQuotes = (value) => {
	const rule = /(')(.+?)(')/gi;
	return value.replace(rule, '‚$2‘');
}

const quotes = (value) => {
	const doubleQuotes = replaceDoubleQuotes(value);
	const singleQuotes = replaceSingleQuotes(doubleQuotes);

	return singleQuotes;
};

export default quotes;
