import { Header } from 'components';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'Components/Header',
	component: Header,
	decorators: [withRouter],
};

const Template = (arg) => <Header {...arg} />;

export const Default = Template.bind({});
