const parseBoolVal = (value) => {
	const positiveStrings = ['true', '1'];

	switch(typeof value) {
		case 'boolean':
			return value;
		case 'string':
			return positiveStrings.includes(value.toLowerCase());
		case 'number':
			return !!value;
		case 'object':
			switch(Array.isArray(value)) {
				case true:
					return !!value.length;
				case false:
					return value !== null && !!Object.keys(value).length;
				default:
					return false;
			}
		default:
			return false;
	}
}

export default parseBoolVal;