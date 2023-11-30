import Flexbox from './Flexbox';

export default {
	title: 'Flexbox',
	component: Flexbox,
	argTypes: {
		justifyContent: {
			type: 'string',
			description: 'Задает расположение элементов в контейнере по горизонтали',
			options: ['center', 'space-between', 'space-around'],
			control: {
				type: 'select',
			},
		},
		row: {
			type: Boolean,
			description: 'Задает расположение элементов в ряд',
			control: 'boolean',
		},
		column: {
			type: Boolean,
			description: 'Задает расположение элементов в колонку',
			control: 'boolean',
		},
	},
};

const Template = (arg) => <Flexbox {...arg} />;

export const Default = () => Template.bind({});
Default.args = {
	justifyContent: 'center',
};
