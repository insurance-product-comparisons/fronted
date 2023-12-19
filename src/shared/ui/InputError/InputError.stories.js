import InputError from '.';

export default {
	title: 'UI-KIT/InputError',
	component: InputError,
	tags: ['autodocs'],
	argTypes: {
		mode: {
			type: 'string',
			description: 'Задает дополнительные классы для компонента',
			control: 'text',
		},
		text: {
			type: 'string',
			description: 'Задает текст ошибки',
			control: 'text',
		},
		isVisible: {
			type: Boolean,
			description: 'Устанавливает видимость ошибки',
			control: 'boolean',
		},
	},
};

const Template = (arg) => <InputError {...arg} />;

export const Default = Template.bind({});
Default.args = {
	errorMode: 'default',
	errorMessage: 'Error',
	isVisible: true,
};
