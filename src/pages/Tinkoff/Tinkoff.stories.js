import { Tinkoff } from 'pages';
import {
	reactRouterParameters,
	withRouter,
} from 'storybook-addon-react-router-v6';
import { Default as Layout } from 'components/Layout/Layout.stories';
import { RESULT_DEFAULT } from 'shared/store/resultDefault';

export default {
	title: 'Pages/Tinkoff',
	component: Tinkoff,
	decorators: [withRouter],
	parameters: {
		reactRouter: reactRouterParameters({
			routing: { path: '/osago/choose/tinkoff' },
		}),
	},
};

export const Default = {
	render: () => (
		<Layout>
			<Tinkoff result={RESULT_DEFAULT} />
		</Layout>
	),
};
