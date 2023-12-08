import TextArea from '.';

export default {
	title: 'UI-KIT/TextArea',
	component: TextArea,
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
		label: {
			type: 'string',
			description: 'Задает label',
			defaultValue: 'Label',
			control: 'text',
		},
		placeholder: {
			type: 'string',
			description: 'Задает label',
			defaultValue: 'Label',
			control: 'text',
		}
	},
};

const Template = (arg) => <TextArea {...arg} />;

export const Default = Template.bind({});
Default.args = {
	mode: 'default',
	label: 'Textarea',
	placeholder: 'placeholder'
};
