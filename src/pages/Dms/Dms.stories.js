import { Dms } from 'pages';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'Pages/DMS',
	component: Dms,
	decorators: [withRouter],
};
const Template = (args) => <Dms {...args} />;

export const Default = Template.bind({});
