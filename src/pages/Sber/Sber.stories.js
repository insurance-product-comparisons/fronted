import { Sber } from 'pages';
import { Default as Layout } from 'components/Layout/Layout.stories';
import {
	withRouter,
	reactRouterParameters,
} from 'storybook-addon-react-router-v6';
import { RESULT_DEFAULT } from 'shared/store/resultDefault';

export default {
	title: 'Pages/СберСтрахование',
	component: Sber,
	decorators: [withRouter],
	parameters: {
		reactRouter: reactRouterParameters({
			routing: { path: '/osago/result/sberbank' },
		}),
	},
};

export const Default = {
	render: () => (
		<Layout>
			<Sber result={RESULT_DEFAULT} />
		</Layout>
	),
};
