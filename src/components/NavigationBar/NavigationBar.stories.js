import NavigationBar from '.';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'Components/NavigationBar',
	component: NavigationBar,
	decorators: [withRouter],
	parameters: {
		tags: ['autodocs'],
	},
	argTypes: {
		mode: {
			type: 'string',
			description: 'Вид меню навигации',
			defaultValue: 'header',
			options: ['header', 'footer'],
			control: {
				type: 'radio',
			},
		},

		variant: {
			type: 'string',
			description: 'Параметры шрифта',
			options: ['body1', 'body2'],
			control: {
				type: 'radio',
			},
		},

		color: {
			type: 'string',
			description: 'Цвет текста',
			options: ['black', 'grey5'],
			control: {
				type: 'radio',
			},
		},
	},
};

const Template = (args) => <NavigationBar {...args} />;

const ARR_LINKS = [
	{ id: 1, route: '/', text: 'ОСАГО' },
	{ id: 2, route: '/', text: 'КАСКО' },
	{ id: 3, route: '/', text: 'ДМС' },
	{ id: 4, route: '/', text: 'Страховая компания' },
];

export const Default = Template.bind({});
Default.args = {
	data: ARR_LINKS,
	mode: 'header',
	variant: 'body1',
	color: 'black',
};

export const Footer = Template.bind({});
Footer.args = {
	data: ARR_LINKS,
	mode: 'footer',
	variant: 'body2',
	color: 'grey5',
};
