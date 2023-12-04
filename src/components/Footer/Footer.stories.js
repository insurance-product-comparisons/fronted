import Footer from '.';

export default {
	title: 'Components/Footer',
	component: Footer,
	argTypes: {
		Logo: {
			description: 'Логотип',
			control: {
				type: 'file',
				accept: '.png',
			},
		},
		Messenger: {
			description: 'Изображение мессенджера',
			control: {
				type: 'file',
				accept: '.png',
			},
		},
		Height: {
			type: 'string',
			description: 'Высота подвала сайта',
			control: 'text',
		},
		BacgroundColor: {
			type: 'string',
			description: 'Цвет фона',
			defaultValue: '',
			control: {
				type: 'color',
			},
		},
	},
};

const Template = (arg) => <Footer {...arg} />;

export const DefaultFooter = () => Template.bind({});
