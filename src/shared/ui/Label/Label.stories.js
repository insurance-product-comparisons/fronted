import Label from '.';

export default {
	title: 'UI-KIT/Label',
	component: Label,
	tags: ['autodocs'],
	argTypes: {
		mode: {
			type: 'string',
			description: 'Селектор стиля компонента.',
			control: 'text',
		},
		inputId: {
			type: 'string',
			description: 'Id инпута для которого описан лэйбл',
		},
		text: {
			type: 'string',
			description: 'Текст лэйбла',
			control: 'text',
		},
	},
};

const Template = (arg) => <Label {...arg} />;

export const Default = Template.bind({});
Default.args = {
	mode: 'default',
	text: 'Label',
};
