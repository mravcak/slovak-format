import isDate from './lib/isDate';

const roundMinutes = (minutes) => {
	return Math.round(minutes / 5) * 5;
}

const hoursForms = {
	1: ['jedna', 'jednej', 'jednu'],
	2: ['dve', 'druhej'],
	3: ['tri', 'tretej'],
	4: ['štyri', 'štvrtej'],
	5: ['päť', 'piatej'],
	6: ['šesť', 'šiestej'],
	7: ['sedem', 'siedmej'],
	8: ['osem', 'ôsmej'],
	9: ['deväť', 'deviatej'],
	10: ['desať', 'desiatej'],
	11: ['jedenásť', 'jedenástej'],
	12: ['dvanásť', 'dvanástej'],
}

const minutesForms = {
	0:  { distance: 0, hrForm: 0},
	5:  { before: 'päť minút po', distance: 0, hrForm: 1},
	10: { before: 'desať minút po', distance: 0, hrForm: 1},
	15: { before: 'štvrť na', distance: 1, hrForm: 2},
	20: { before: 'štvrť na', after: 'aj päť minút', distance: 1, hrForm: 2},
	25: { before: 'za päť minút pol', distance: 1, hrForm: 1},
	30: { before: 'pol', distance: 1, hrForm: 1},
	35: { before: 'pol', after: 'aj päť minút', distance: 1, hrForm: 1},
	40: { before: 'za päť trištvrte na', distance: 1, hrForm: 2},
	45: { before: 'trištvrte na', distance: 1, hrForm: 2},
	50: { before: 'za desať minút', distance: 1, hrForm: 0},
	55: { before: 'za päť minút', distance: 1, hrForm: 0},
}

const timeText = (time) => {
	const myTime = isDate(time) ? time : new Date();

	let hours = myTime.getHours();
	let minutes = myTime.getMinutes();
	minutes = roundMinutes(minutes);

	if(minutes === 60) {
		minutes = minutes - 60;
		hours = hours + 1;
	}

	const activeSlot = minutesForms[minutes];
	hours += activeSlot.distance;

	while(hours > 12) {
		hours = hours - 12;
	}

	const text = [
		activeSlot.before,
		hoursForms[hours][activeSlot.hrForm] ? hoursForms[hours][activeSlot.hrForm] : hoursForms[hours][0],
		activeSlot.after,
	]

	return text.join(' ').trim();
}

export default timeText;
