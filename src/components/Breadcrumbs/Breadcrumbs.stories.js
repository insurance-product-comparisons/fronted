import { Breadcrumbs } from 'components';
import {
	withRouter,
	reactRouterParameters,
} from 'storybook-addon-react-router-v6';

export default {
	title: 'Components/Breadcrumbs',
	component: Breadcrumbs,
	decorators: [withRouter],
	parameters: {
		reactRouter: reactRouterParameters({
			routing: { path: '/osago/choose/vsk' },
		}),
	},
};

const Template = (arg) => <Breadcrumbs {...arg} />;

export const Default = Template.bind({});
