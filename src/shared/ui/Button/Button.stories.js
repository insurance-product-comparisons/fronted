import Button from '.';

export default {
	title: 'UI-KIT/Button',
	component: Button,
	tags: ['autodocs'],
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
			options: ['accent', 'ghost'],
			control: {
				type: 'radio',
			},
		},
		mode: {
			type: 'string',
			description: 'Задает дополнительный класс',
			options: ['submit-form', 'count', 'more', 'submit-request', 'enter'],
			control: 'select',
		},
		disabled: {
			type: Boolean,
			description: 'Устанавливает атрибут disabled',
			control: 'boolean',
		},
	},
};

const Template = (arg) => <Button {...arg} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'Button',
	disabled: false,
	bgcolor: 'accent',
	mode: 'submit-form',
};

export const Secondary = Template.bind({});
Secondary.args = {
	children: 'Button',
	disabled: false,
	bgcolor: 'ghost',
	mode: 'more',
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
	children: 'Войти',
	disabled: false,
	bgcolor: 'ghost',
	mode: 'enter',
};
