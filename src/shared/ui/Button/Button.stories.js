import Button from './Button';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		children: {
			type: 'string',
			description: 'Задает текст для кнопки',
			control: 'text',
		},
		shape: {
			type: 'string',
			description: 'Вариант внешнего вида кнопки',
			defaultValue: '',
			options: [],
			control: {
				type: 'radio',
			},
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
		color: {
			type: 'string',
			description: 'Задает основной цвет для кнопки',
			defaultValue: '',
			options: ['primary', 'secondary'],
			control: {
				type: 'radio',
			},
		},
		size: {
			type: 'string',
			description: 'Задает размер',
			defaultValue: '',
			options: ['small', 'medium', 'large'],
			control: {
				type: 'radio',
			},
		},
		view: {
			type: 'string',
			description: 'Задает внешний вид',
			defaultValue: '',
			options: ['primary', 'outline', 'ghost'],
			control: {
				type: 'radio',
			},
		},
		disabled: {
			type: Boolean,
			description: 'Устанавливает атрибут disabled',
			control: 'boolean',
		},
		className: {
			type: 'string',
			description: 'Задает дополнительные классы для компонента',
			control: 'text',
		},
	},
};

export const Template = (arg) => <Button {...arg} />;
