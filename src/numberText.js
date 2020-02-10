import plural from './plural';
import { singles, tens, hundreds, orders } from './lib/numberWords';

const splitToTriplets = (value) => {
	const string = value.toLocaleString('sk', {
		style: 'decimal',
		useGrouping: true,
	});
	const triplets = string.split(' ');

	return triplets;
}

const pick = (value, pattern) => {
	const string = value.toString();
	const first = pattern.indexOf('$');
	const length = pattern.lastIndexOf('$') + 1;
	const picked = string.slice(first, length);

	return parseInt(picked);
}

const format_$$ = (value) => {
	if(value < 21) {
		return singles[value];
	} else {
		const $_ = pick(value, '$_');
		const _$ = pick(value, '_$');
		return tens[$_] + singles[_$];
	}
}

const format$__ = (value) => {
	return hundreds[value];
}

const formatTriplet = (value) => {
	const $$$ = value.padStart(3, '0');
	const $__ = pick($$$, '$__');
	const _$$ = pick($$$, '_$$');

	return format$__($__) + format_$$(_$$);
}

const translateTriplet = (number) => {
	return {
		number: parseInt(number),
		formatted: formatTriplet(number),
	}
}

const reduceTriplets = (accumulator, triplet, index, arr) => {
	const orderForms = orders[arr.length - 1 - index];
	const formattedOrder = plural(triplet.number, orderForms, { inclusive: false });
	return accumulator + triplet.formatted + formattedOrder;
}

const numberText = (value) => {
	const numVal = parseInt(value);

	const triplets = splitToTriplets(numVal);
	const tripletsTranslated = triplets.map(translateTriplet);
	const string = tripletsTranslated.reduce(reduceTriplets, '');

	return string;
};

export default numberText;
