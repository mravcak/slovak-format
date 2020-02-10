import plural from './plural';

const pluralPieces = (value, options = {}) => {
	const forms = ['kus', 'kusy', 'kusov', 'kusu'];
	return plural(value, forms, options);
}

export default pluralPieces;
