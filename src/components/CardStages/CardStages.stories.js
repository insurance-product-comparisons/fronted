import { CardStages } from 'components';
import { DEFAULT } from 'shared/utils/constants/modes';

export default {
	title: 'Components/CardStages',
	component: CardStages,
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

const Template = (arg) => <CardStages {...arg} />;

export const Default = Template.bind({});

Default.args = {
	data: {
		number: '1',
		text: 'Введите данные автомобиля и стаж вождения',
	},
	mode: DEFAULT,
};
