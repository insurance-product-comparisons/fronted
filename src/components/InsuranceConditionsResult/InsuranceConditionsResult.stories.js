import { InsuranceConditionsResult } from 'components';

export default {
	title: 'Components/InsuranceConditionsResult',
	component: InsuranceConditionsResult,
	tags: ['autodocs'],
	argTypes: {
		data: {
			name: 'Входящие данные',
			description: 'Объект с условиями страховки',
			type: 'object',
			control: { control: 'object' },
		},
	},
};

const Template = (arg) => <InsuranceConditionsResult {...arg} />;

const OBJECT_DEFAULT = {
	id: '1',
	company: 'СберСтрахование',
	rating: 5,
	franchise: {
		name: 'Франшиза',
		sum: '15 000 ₽',
	},
	period: { name: 'Срок', value: '1 год' },
	price: { name: 'Цена', value: '10 000 ₽' },
};

export const Default = Template.bind({});

Default.args = {
	data: OBJECT_DEFAULT,
};
