import LinkComponent from '.';

export default {
	title: 'UI-KIT/LinkComponent',
	component: LinkComponent,
	tags: ['autodocs'],
	argTypes: {
		link: {
			type: 'string',
			description: 'Ссылка на сторонний ресурс',
		},
		text: {
			type: 'string',
			description: 'Текст ссылки',
		},
		mode: {
			type: 'string',
			description: 'Задает дополнительные классы для компонента',
			options: ['footer'],
			control: {
				type: 'radio',
			},
		},
	},
};

const Template = (args) => <LinkComponent {...args} />;

export const Footer = Template.bind({});
Footer.args = {
	link: '#',
	text: 'Ссылка на вики проекта на github',
	mode: 'footer',
};
