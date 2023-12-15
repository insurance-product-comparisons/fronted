import { Form } from 'components';

export default {
	title: 'Components/Form',
	component: Form,
	tags: ['autodocs'],
	argTypes: {
		children: {
			type: 'string',
			description: 'Задает наименование формы',
			control: 'text',
		},
	},
};

const Template = (arg) => <Form {...arg} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Форма',
};
