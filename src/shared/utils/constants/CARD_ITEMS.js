import osago from 'images/osago.svg';
import kasko from 'images/kasko.svg';
import dmc from 'images/dmc.svg';

const CARD_ITEMS = [
	{
		image: osago,
		title: 'ОСАГО',
		text: 'Электронный полис с онлайн-калькулятором и скидками (КБМ) за безаварийность.',
		route: '/osago',
	},
	{
		image: kasko,
		title: 'КАСКО',
		text: 'Расчёт стоимости за 1 минуту — заполните минимум данных и не тратьте время на поездки в офис.',
		route: '/kasko',
	},
	{
		image: dmc,
		title: 'ДМС',
		text: 'Дополнительное медицинское страхование для взрослых и детей.',
		route: '/dms',
	},
];

export default CARD_ITEMS;
