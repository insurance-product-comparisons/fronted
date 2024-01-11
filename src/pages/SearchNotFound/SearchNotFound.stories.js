import { SearchNotFound } from 'pages';
import { Default as Layout } from 'components/Layout/Layout.stories';
import {
	reactRouterParameters,
	withRouter,
} from 'storybook-addon-react-router-v6';
export default {
	title: 'Pages/Ничего не найдено',
	component: SearchNotFound,
	decorators: [withRouter],
	parameters: {
		reactRouter: reactRouterParameters({
			routing: { path: '/not-found' },
		}),
	},
};
export const Default = {
	render: () => (
		<Layout>
			<SearchNotFound />
		</Layout>
	),
};
