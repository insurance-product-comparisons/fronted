import Card from '../Card/Card';
import osago from '../../shared/utils/images/osago.svg';

export default {
	title: 'Components/Card',
	component: Card,
	argTypes: {
		data: {
			type: 'array',
			control: { control: 'object' },
			name: 'Входящие данные',
			description: 'Объект с данными карточки',
			image: {
				type: 'image',
				control: {
					type: 'radio',
				},
			},
			title: {
				type: 'text',
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

const Template = (arg) => <Card {...arg} />;

export const Default = Template.bind({});

Default.args = {
	data: {
		image: osago,
		title: 'ОСАГО',
		text: 'Электронный полис с онлайн-калькулятором и скидками (КБМ) за безаварийность.',
	},

	mode: 'default',
};
