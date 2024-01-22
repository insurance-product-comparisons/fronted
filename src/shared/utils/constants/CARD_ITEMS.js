import osago from 'images/osago.svg';
import kasko from 'images/kasko.svg';
import dmc from 'images/dmc.svg';

const CARD_ITEMS = [
	{
		image: osago,
		title: 'ОСАГО',
		text: 'Электронный полис от ведущих страховых компаний.',
		route: '/osago',
		textButton: 'Рассчитать ОСАГО',
	},
	{
		image: kasko,
		title: 'КАСКО',
		text: 'Быстрый расчет стоимости полиса без визита в офис.',
		route: '/kasko',
		textButton: 'Рассчитать КАСКО',
	},
	{
		image: dmc,
		title: 'ДМС',
		text: 'Дополнительное медицинское страхование для взрослых и детей.',
		route: '/dms',
		textButton: 'Рассчитать ДМС',
	},
];

export default CARD_ITEMS;
