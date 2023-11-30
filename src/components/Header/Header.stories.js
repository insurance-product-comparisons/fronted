import { Header } from './Header';

export default {
	title: 'Components/Header',
	component: Header,
	argTypes: {
		Logo: {
			type: Image,
			description: 'Логотип',
			control: {
				type: 'file',
				accept: '.png',
			},
		},
		BacgroundColor: {
			type: 'string',
			description: 'Цвет фона',
			defaultValue: '',
			control: {
				type: 'color',
			},
		},
		maxHeight: {
			type: 'string',
			description: 'Высота шапки сайта',
			control: 'text',
		},
	},
};

const Template = (arg) => <Header {...arg} />;

export const Default = () => Template.bind({});
