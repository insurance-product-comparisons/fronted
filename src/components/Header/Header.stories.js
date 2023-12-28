import { Header } from 'components';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'Components/Header',
	component: Header,
	decorators: [withRouter],
	argTypes: {
		mode: {
			type: 'string',
			description: 'Размер логотипа',
			control: {
				type: 'radio',
			},
		},
	},
};

const Template = (arg) => <Header {...arg} />;

export const Default = Template.bind({});
