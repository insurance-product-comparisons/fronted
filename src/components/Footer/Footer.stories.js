import { Footer } from 'components';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'Components/Footer',
	component: Footer,
	decorators: [withRouter],
};

const Template = (arg) => <Footer {...arg} />;

export const Default = Template.bind({});
