import TextArea from '.';

export default {
	title: 'UI-KIT/TextArea',
	component: TextArea,
	tags: ['autodocs'],
	argTypes: {
		disabled: {
			type: Boolean,
			description: 'Устанавливает атрибут disabled',
			control: 'boolean',
		},
		mode: {
			type: 'string',
			description: 'Задает дополнительные классы для компонента',
			control: 'text',
		},
		name: {
			type: 'string',
			description: 'Задает имя компонента',
			control: 'text',
		},
		id: {
			type: 'string',
			description: 'Задает id для инпута',
			control: 'text',
		},
		register: {},
	},
};

const Template = (arg) => <TextArea {...arg} />;

export const Default = Template.bind({});
Default.args = {
	mode: 'default',
};
