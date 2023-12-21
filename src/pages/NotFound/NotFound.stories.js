import { NotFound } from 'pages';
import { Default as Layout } from 'components/Layout/Layout.stories';
import {
	withRouter,
	reactRouterParameters,
} from 'storybook-addon-react-router-v6';

export default {
	title: 'Pages/Страница 404',
	component: NotFound,
	decorators: [withRouter],
	parameters: {
		reactRouter: reactRouterParameters({
			routing: { path: '*' },
		}),
	},
};

export const Default = {
	render: () => (
		<Layout>
			<NotFound />
		</Layout>
	),
};
