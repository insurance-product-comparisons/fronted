import { Osago } from 'pages';
import { Default as Layout } from 'components/Layout/Layout.stories';
import {
	withRouter,
	reactRouterParameters,
} from 'storybook-addon-react-router-v6';

export default {
	title: 'Pages/ОСАГО',
	component: Osago,
	decorators: [withRouter],
	parameters: {
		reactRouter: reactRouterParameters({
			routing: { path: '/osago' },
		}),
	},
};

export const Default = {
	render: () => (
		<Layout>
			<Osago />
		</Layout>
	),
};
