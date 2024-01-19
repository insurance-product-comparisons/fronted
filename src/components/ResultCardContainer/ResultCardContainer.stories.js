import { ResultCardContainer } from 'components';
import { RESULT_DEFAULT } from 'shared/store/resultDefault';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'Components/ResultCardContainer',
	component: ResultCardContainer,
	decorators: [withRouter],
	tags: ['autodocs'],
	argTypes: {
		cards: {
			description: 'Объект с данными карточки',
			type: 'array',
			control: { type: 'object' },
		},
	},
};

const Template = (arg) => <ResultCardContainer {...arg} />;

export const Default = Template.bind({});

Default.args = {
	data: RESULT_DEFAULT,
};
