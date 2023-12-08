import Typography from '.';

export default {
	title: 'UI-KIT/Typography',
	component: Typography,
	argTypes: {
		children: {
			type: 'string',
			description: 'Задает текст типографики',
			control: 'text',
		},
		variant: {
			type: 'string',
			description: 'Задает вариант типографики, от которого зависит размер шрифта',
			options: [
				'h1',
				'h2',
				'h3',
				'body1',
				'body2',
				'body3',
			],
			control: {
				type: 'select',
			},
		},
		color: {
			type: 'string',
			description: 'Задает цвет для компонента',
			options: [
				'black',
				'white',
				'grey',
				'grey1',
				'grey2',
				'grey3',
				'grey5',
				'yellow',
			],
			control: {
				type: 'select',
			},
		},
	},
};

const Template = (arg) => <Typography {...arg} />;

export const Default = () => Template.bind({});
Default.args = {
	variant: 'h1',
	children: 'Я тексттексттексттексттексттекст',
	color: 'black'
};
