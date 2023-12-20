import { ResultCard } from 'components';

export default {
	title: 'Components/ResultCard',
	component: ResultCard,
	tags: ['autodocs'],
	argTypes: {
		data: {
			description: 'Массив с условиями страховок',
			type: 'array',
			control: { type: 'object' },
		},
	},
};

const Template = (arg) => <ResultCard {...arg} />;

const arrayDefault = [
	{
		id: '1',
		company: 'СберСтрахование',
		rating: 5,
		franchise: {
			name: 'Франшиза',
			sum: '15 000 ₽',
		},
		period: { name: 'Срок', value: '1 год' },
		price: { name: 'Цена', value: '10 000 ₽' },
	},
	{
		id: '2',
		company: 'ВСК',
		rating: 5,
		insuranceAmount: {
			name: 'Страховая сумма',
			sum: '1 000 000 ₽',
		},
		period: { name: 'Срок', value: '1 год' },
		price: { name: 'Цена', value: '14 000 ₽' },
	},
	{
		id: '3',
		company: 'Тинькофф Страхование',
		rating: 5,
		period: { name: 'Срок', value: '1 год' },
		price: { name: 'Цена', value: '15 000 ₽' },
	},
];

export const Default = Template.bind({});

Default.args = {
	data: arrayDefault,
};
