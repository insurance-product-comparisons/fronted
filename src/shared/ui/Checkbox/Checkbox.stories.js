import Checkbox from '.';

export default {
	title: 'UI-KIT/Checkbox',
	component: Checkbox,
	tags: ['autodocs'],
	argTypes: {
		mode: {
			type: 'string',
			description: 'Задает дополнительные классы',
			control: 'text',
		},
		disabled: {
			type: Boolean,
			description: 'Устанавливает атрибут disabled',
			control: 'boolean',
		},
		label: {
			type: 'string',
			description: 'Устанавливает текст возле компонента',
			control: 'text',
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
