import List from './List';

export default {
	title: 'UI-KIT/List',
	component: List,
	argTypes: {
		array: {
			description: 'Задает массив данных для списка',
			control: 'object',
		},
		mode: {
			type: 'string',
			description: 'Задает дополнительные классы для компонента',
			control: 'text',
		},
	},
};

const Template = (arg) => <List {...arg} />;

export const Default = Template.bind({});
Default.args = {
	mode: 'default',
	array: [
		'Тут написан текст',
		'Тут тоже написан текст',
		'И даже тут написан текст',
	],
};

export const Footer = Template.bind({});
Footer.args = {
	mode: 'footer',
	array: [
		'Тут написан текст для футера',
		'Тут тоже написан текст для футера',
		'И даже тут написан текст для футера',
	],
};
