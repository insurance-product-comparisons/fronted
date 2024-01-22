import { Vsk } from 'pages';
import {
	reactRouterParameters,
	withRouter,
} from 'storybook-addon-react-router-v6';
import { Default as Layout } from 'components/Layout/Layout.stories';
import { RESULT_DEFAULT } from 'shared/store/resultDefault';

export default {
	title: 'Pages/ВСК',
	component: Vsk,
	decorators: [withRouter],
	parameters: {
		reactRouter: reactRouterParameters({
			routing: { path: '/osago/result/vsk' },
		}),
	},
};

export const Default = {
	render: () => (
		<Layout>
			<Vsk result={RESULT_DEFAULT} />
		</Layout>
	),
};
