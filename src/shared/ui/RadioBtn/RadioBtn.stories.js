import RadioBtn from '.';

export default {
	title: 'UI-KIT/RadioBtn',
	component: RadioBtn,
	tags: ['autodocs'],
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
	label: 'Radio button',
	mode: 'default',
};

export const Checked = Template.bind({});
Checked.args = {
	label: 'Radio button',
	mode: 'default',
	checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	label: 'Radio button',
	mode: 'default',
	disabled: true,
};
