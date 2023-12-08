import RadioBtn from '.';

export default {
	title: 'UI-KIT/RadioBtn',
	component: RadioBtn,
	argTypes: {
		mode: {
			type: 'string',
			description: 'Задает дополнительные классы для компонента',
			control: 'text',
		},
		disabled: {
			type: Boolean,
			description: 'Устанавливает атрибут disabled',
			control: 'boolean',
		},
		label: {
			type: 'string',
			description: 'Задает текст лейбла для чекбокса',
			defaultValue: 'Label',
			control: 'text',
		},
	},
};

const Template = (arg) => <RadioBtn {...arg} />;

export const Default = Template.bind({});
Default.args = {
	label: 'Radio',
};
