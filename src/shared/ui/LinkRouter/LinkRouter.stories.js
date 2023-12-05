import { withRouter } from 'storybook-addon-react-router-v6';
import LinkRouter from '.';

export default {
	title: 'UI-KIT/LinkRouter',
	component: LinkRouter,
	tags: ['autodocs'],
	decorators: [withRouter],
	argTypes: {
		route: {
			type: 'string',
			description: 'Ссылка на внутренний ресурс',
		},
		text: {
			type: 'string',
			description: 'Текст ссылки',
		},
		mode: {
			type: 'string',
			description: 'Задает дополнительные классы для компонента',
			options: ['default'],
			control: {
				type: 'radio',
			},
		},
	},
};

const Template = (args) => <LinkRouter {...args} />;

export const Default = Template.bind({});
Default.args = {
	route: '/',
	text: 'Оставить заявку',
	mode: 'default',
};
