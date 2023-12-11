import ProductContainer from '.';
import osago from '../../shared/utils/images/osago.svg';

export default {
	title: 'Components/ProductContainer',
	component: ProductContainer,
	argTypes: {
		data: {
			type: 'array',
			control: { control: 'object' },
			name: 'Входящие данные',
			description: 'Объект с данными пункта ответов на вопросы.',
			image: {
				type: 'image',
				control: {
					type: 'radio',
				},
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

const Template = (arg) => <ProductContainer {...arg} />;

export const Default = Template.bind({});

Default.args = {
	data: {
		image: osago,
		title: 'ОСАГО',
		text: 'Электронный полис с онлайн-калькулятором и скидками (КБМ) за безаварийность.',
	},

	mode: 'default',
};
