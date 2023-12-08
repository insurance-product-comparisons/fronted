import Checkbox from '.';

export default {
	title: 'UI-KIT/Checkbox',
	component: Checkbox,
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
	size: 'small',
};
