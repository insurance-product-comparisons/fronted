import { StagesContainer } from 'components';
import CARD_STAGES from 'shared/utils/constants/cardStages';
import { DEFAULT } from 'shared/utils/constants/modes';

export default {
	title: 'Components/StagesContainer',
	component: StagesContainer,
	argTypes: {
		data: {
			type: 'object',
			control: { control: 'object' },
			name: 'Входящие данные',
			description: 'Объект с данными карточки',
			number: {
				type: 'number',
			},
			text: {
				type: 'text',
			},
		},
		mode: {
			type: 'string',
			description: 'Селектор стиля компонента.',
			options: ['default'],
			control: {
				type: 'radio',
			},
		},
	},
};

const Template = (arg) => <StagesContainer {...arg} />;

export const Default = Template.bind({});

Default.args = {
	data: CARD_STAGES,
	mode: DEFAULT,
};
