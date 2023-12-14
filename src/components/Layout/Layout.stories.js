import { Layout } from 'components';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'Components/Layout',
	component: Layout,
	decorators: [withRouter],
	argTypes: {
		maxWidth: {
			type: 'string',
			description: 'Максимальную ширина',
			control: 'text',
		},
		BacgroundColor: {
			type: 'string',
			description: 'Цвет фона',
			defaultValue: '',
			control: {
				type: 'color',
			},
		},
	},
};

const Template = (arg) => <Layout {...arg} />;

export const Default = Template.bind({});
