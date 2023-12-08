import Button from '.';

export default {
	title: 'UI-KIT/Button',
	component: Button,
	argTypes: {
		children: {
			type: 'string',
			description: 'Задает текст для кнопки',
			control: 'text',
		},
		type: {
			type: 'string',
			description: 'Устанавливает тип кнопки',
			defaultValue: '',
			options: ['button', 'submit', 'reset'],
			control: {
				type: 'radio',
			},
		},
		bgcolor: {
			type: 'string',
			description: 'Задает основной цвет для кнопки',
			options: [
				'accent',
				'ghost'
			],
			control: {
				type: 'radio',
			},
		},
		mode: {
			type: 'string',
			description: 'Задает дополнительный класс',
			control: 'text'
		},
		disabled: {
			type: Boolean,
			description: 'Устанавливает атрибут disabled',
			control: 'boolean',
		},
	},
};

const Template = (arg) => <Button {...arg} />;

export const Default = Template.bind({})
Default.args = {
	children: 'Click',
	disabled: false,
	bgcolor: 'ghost',
	mode: 'enter'
}

export const SubmitForm = Template.bind({})
SubmitForm.args = {
	children: 'Submit',
	disabled: false,
	bgcolor: 'accent',
	mode: 'submit-form'
}

export const MoreBtn = Template.bind({})
MoreBtn.args = {
	children: 'More',
	disabled: false,
	bgcolor: 'ghost',
	mode: 'more'
}
