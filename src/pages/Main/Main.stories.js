import { Main } from 'pages';
import { Default as Layout } from 'components/Layout/Layout.stories';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'Pages/Main',
	component: Main,
	decorators: [withRouter],
};

export const Default = {
	render: () => (
		<Layout>
			<Main />
		</Layout>
	),
};
