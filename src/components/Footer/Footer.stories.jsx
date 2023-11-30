import { Footer } from './Footer';

export default {
	title: 'Footer',
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
	},
};

const Template = (arg) => <Footer {...arg} />;

export const DefaultFooter = () => Template.bind({});
