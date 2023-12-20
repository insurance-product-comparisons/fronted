import { AnswersList } from 'components';
import { ANSWERS_MAIN } from 'shared/store/answers';

export default {
	title: 'Components/AnswersList',
	component: AnswersList,
	tags: ['autodocs'],
	argTypes: {
		title: {
			description: 'Заголовок списка',
			type: 'string',
			control: { type: 'text' },
		},
		data: {
			name: 'Входящие данные',
			description: 'Массив с объектами ответов на вопросы.',
			type: 'array',
			control: { control: 'object' },
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

const Template = (args) => <AnswersList {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'Вопросы и ответы:',
	data: ANSWERS_MAIN,
	mode: 'default',
};
