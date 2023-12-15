import Input from '.';

export default {
	title: 'UI-KIT/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		mode: {
			type: 'string',
			description: 'Задает классы для компонента',
			control: 'text',
		},
		submode: {
			type: 'string',
			description: 'Задает дополнительные классы для компонента',
			control: 'text',
		},
		type: {
			type: 'string',
			description: 'Задает тип инпута',
			control: 'text',
		},
		name: {
			type: 'string',
			description: 'Задает имя компонента',
			control: 'text',
		},
		placeholder: {
			type: 'string',
			description: 'Задает плейсхолдер для инпута',
			control: 'text',
		},
		id: {
			type: 'string',
			description: 'Задает id для инпута',
			control: 'text',
		},
		isValid: {
			type: Boolean,
			description: 'Устанавливает валидность инпута',
			control: 'boolean',
		},
		isDisabled: {
			type: Boolean,
			description: 'Устанавливает disabled инпута',
			control: 'boolean',
		},
		value: {
			type: 'string',
			description: 'Задает значение инпута',
			control: 'text',
		},
	},
};

const Template = (arg) => <Input {...arg} />;

export const Default = Template.bind({});
Default.args = {
	mode: 'default',
	value: 'Text',
	isValid: true,
	isDisabled: false,
};
