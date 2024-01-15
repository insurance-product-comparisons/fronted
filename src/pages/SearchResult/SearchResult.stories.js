import { SearchResult } from 'pages';
import { RESULT_DEFAULT } from 'shared/store/resultDefault';
import { Default as Layout } from 'components/Layout/Layout.stories';
import {
	reactRouterParameters,
	withRouter,
} from 'storybook-addon-react-router-v6';
export default {
	title: 'Pages/Результаты поиска',
	component: SearchResult,
	decorators: [withRouter],
	parameters: {
		reactRouter: reactRouterParameters({
			routing: { path: '/osago/result' },
		}),
	},
};
export const Default = {
	render: () => (
		<Layout>
			<SearchResult result={RESULT_DEFAULT} />
		</Layout>
	),
};
