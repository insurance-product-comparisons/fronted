import {
	reactRouterParameters,
	withRouter,
} from 'storybook-addon-react-router-v6';
import { Request } from 'pages';
import { Default as Layout } from 'components/Layout/Layout.stories';

export default {
	title: 'Pages/Request',
	component: Request,
	decorators: [withRouter],
	parameters: {
		reactRouter: reactRouterParameters({
			routing: { path: '/request' },
		}),
	},
};

export const Default = {
	render: () => (
		<Layout>
			<Request />
		</Layout>
	),
};
