import { Footer } from 'components';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'Components/Footer',
	component: Footer,
	decorators: [withRouter],
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

export const Default = Template.bind({});
