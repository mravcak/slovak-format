const isDate = (value) => {
	return (value instanceof Date && !isNaN(value.valueOf()));
}

export default isDate;
