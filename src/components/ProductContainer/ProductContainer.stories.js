import ProductContainer from '.';
import cardItems from '../../../src/shared/utils/constants/cardItems';

export default {
	title: 'Components/ProductContainer',
	component: ProductContainer,
	argTypes: {
		data: {
			type: 'array',
			control: { control: 'object' },
			name: 'Входящие данные',
			description: 'Объект с данными',
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
	data: cardItems,
	mode: 'default',
};
