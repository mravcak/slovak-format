import parseBoolVal from './lib/parseBoolVal';

const boolText = (value, yes = 'áno', no = 'nie') => {
	const boolVal = parseBoolVal(value);
	return boolVal ? yes : no;
}

export default boolText;
