import ListItem from '.';

export default {
	title: 'UI-KIT/ListItem',
	component: ListItem,
	argTypes: {
		children: {
			type: 'string',
			description: 'Задает текст компонента',
			control: 'text',
		},
		mode: {
			type: 'string',
			description: 'Задает дополнительные классы для компонента',
			control: 'text',
		},
	},
};

const Template = (arg) => <ListItem {...arg} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Тексттекстекстекст',
	mode: 'default'
};
