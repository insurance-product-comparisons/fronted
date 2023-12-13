import Input from '.';

export default {
	title: 'UI-KIT/Input',
	component: Input,
	argTypes: {
		disabled: {
			type: Boolean,
			description: 'Устанавливает атрибут disabled',
			control: 'boolean',
		},
		mode: {
			type: 'string',
			description: 'Задает дополнительные классы для компонента',
			control: 'text',
		},
		label: {
			type: 'string',
			description: 'Задает label',
			defaultValue: 'Label',
			control: 'text',
		},
	},
};

const Template = (arg) => <Input {...arg} />;

export const Default = Template.bind({});
Default.args = {
	mode: 'default',
	typoVariant: 'body2',
	value: 'Text',
	isValid: true,
	isDisabled: false,
};
