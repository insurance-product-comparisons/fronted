import AnswersItem from '.';

export default {
	title: 'UI-KIT/AnswersItem',
	component: AnswersItem,
	tags: ['autodocs'],
	argTypes: {
		data: {
			name: 'Входящие данные',
			description: 'Объект с данными пункта ответов на вопросы.',
			type: {
				title: { cotrol: 'text' },
				content: { cotrol: 'text' },
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

const Template = (args) => <AnswersItem {...args} />;

export const Default = Template.bind({});
Default.args = {
	data: {
		title: 'В чем отличие КАСКО от ОСАГО?',
		content: `Нет однозначного ответа, какая страховка лучше, поэтому, если есть возможность, стоит оформить оба полиса. Преимущество такого страхования – защита автомобиля по максимуму.
В случае ДТП ОСАГО покроет ремонт машины потерпевшей стороны, а КАСКО обеспечит компенсацию повреждений транспорта владельца полиса, даже если виновником аварии является именно он.
Кроме того, выбора оформлять ОСАГО или нет у автолюбителя не имеется.`,
	},
	mode: 'default',
};
