import Preloader from '.';

export default {
	title: 'UI-KIT/Preloader',
	component: Preloader,
	argTypes: {
		color: {
			type: 'string',
			description: 'Задает основной цвет для элемента',
			defaultValue: '',
			options: ['primary', 'secondary'],
			control: {
				type: 'radio',
			},
		},
		className: {
			type: 'string',
			description: 'Задает дополнительные классы для компонента',
			control: 'text',
		},
		size: {
			type: 'string',
			description: 'Задает размер элемента',
			defaultValue: '',
			options: ['small', 'medium', 'large'],
			control: {
				type: 'radio',
			},
		},
	},
};

const Template = (arg) => <Preloader {...arg} />;

export const Default = () => Template.bind({});
Default.args = {
	size: 'small',
};
