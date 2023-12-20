import { ProductContainer } from 'components';
import { withRouter } from 'storybook-addon-react-router-v6';
import CARD_ITEMS from 'shared/utils/constants/CARD_ITEMS';

export default {
	title: 'Components/ProductContainer',
	component: ProductContainer,
	decorators: [withRouter],
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
	data: CARD_ITEMS,
	mode: 'default',
};
