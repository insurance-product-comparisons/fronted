import { Kasko } from 'pages';
import { Default as Layout } from 'components/Layout/Layout.stories';
import {
	withRouter,
	reactRouterParameters,
} from 'storybook-addon-react-router-v6';

export default {
	title: 'Pages/KACKO',
	component: Kasko,
	decorators: [withRouter],
	parameters: {
		reactRouter: reactRouterParameters({
			routing: { path: '/kasko' },
		}),
	},
};

export const Default = {
	render: () => (
		<Layout>
			<Kasko />
		</Layout>
	),
};
