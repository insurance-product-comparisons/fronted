import TextArea from './TextArea';

export default {
	title: 'TextArea',
	component: TextArea,
	argTypes: {
		autoSize: {
			type: Boolean,
			description:
				'Указывает, будет ли текстовое поле изменять размер в зависимости от количества введенного в него текста',
			control: 'boolean',
		},
		maxLength: {
			type: 'number',
			description: 'Устанавливает максимальное число символов',
			control: {
				type: 'number',
				min: 1,
				max: 130,
			},
		},
		color: {
			type: 'string',
			description: 'Задает основной цвет',
			defaultValue: '',
			options: ['primary', 'secondary'],
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
		error: {
			type: 'string',
			description: 'Отображает ошибку заполнения поля',
			control: 'text',
		},
		hint: {
			type: 'string',
			description: 'Отображает подсказку для заполнения поля',
			control: 'text',
		},
		label: {
			type: 'string',
			description: 'Задает label',
			defaultValue: 'Label',
			control: 'text',
		},
		shape: {
			type: 'string',
			description: 'Задает скругление',
			defaultValue: '',
			options: ['geometric', 'rounded', 'circular'],
			control: {
				type: 'radio',
			},
		},
		size: {
			type: 'string',
			description: 'Задает размер инпута',
			defaultValue: '',
			options: ['small', 'medium', 'large'],
			control: {
				type: 'radio',
			},
		},
	},
};

const Template = (arg) => <TextArea {...arg} />;

export const Default = () => Template.bind({});
Default.args = {
	shape: 'geometric',
};
