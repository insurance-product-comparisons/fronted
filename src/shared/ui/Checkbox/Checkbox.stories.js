import Checkbox from '.';

export default {
	title: 'UI-KIT/Checkbox',
	component: Checkbox,
	tags: ['autodocs'],
	argTypes: {
		id: {
			type: 'string',
			description: 'Задает id чекбокса',
			control: 'text',
		},
		name: {
			type: 'string',
			description: 'Задает имя чекбокса',
			control: 'text',
		},
		value: {
			type: 'string',
			description: 'Задает значение (value) чекбокса',
			control: 'text',
		},
		mode: {
			type: 'string',
			description: 'Задает стиль чекбокса',
			control: 'text',
		},
		typoVariant: {
			type: 'string',
			description: 'Задает типографику лэйбла чекбокса',
			control: 'text',
		},
		typoColor: {
			type: 'string',
			description: 'Задает цвет типографики лэйбла чекбокса',
			control: 'text',
		},
		label: {
			type: 'string',
			description: 'Задает лэйбл чекбокса',
			control: 'text',
		},
		disabled: {
			type: Boolean,
			description: 'Устанавливает атрибут disabled',
			control: 'boolean',
		},
	},
};

const Template = (arg) => <Checkbox {...arg} />;

export const Default = Template.bind({});
Default.args = {
	id: '1',
	name: 'agree',
	value: 'agree',
	mode: 'default',
	typoVariant: 'body2',
	label: 'Я согласен на обработку персональных данных',
};
