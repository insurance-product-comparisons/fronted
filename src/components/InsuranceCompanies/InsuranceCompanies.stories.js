import { InsuranceCompanies } from 'components';
import { FOR_COMPANIES, FOR_REQUEST } from 'shared/store/companies';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
	title: 'Components/InsuranceCompanies',
	component: InsuranceCompanies,
	decorators: [withRouter],
	tags: ['autodocs'],
	argTypes: {
		title: {
			description: 'Заголовок',
			type: 'text',
			control: { type: 'text' },
		},
		description: {
			description: 'Описание',
			type: 'text',
			control: { type: 'text' },
		},
		nameButton: {
			description: 'Название кнопки',
			type: 'text',
			control: { type: 'text' },
		},
		modeButton: {
			description: 'Вид кнопки',
			type: 'string',
			options: ['more', 'submit-request'],
			control: { type: 'radio' },
		},
		disabled: {
			description: 'Состояние кнопки',
			type: Boolean,
			control: { type: 'boolean' },
		},
	},
};

const Template = (arg) => <InsuranceCompanies {...arg} />;

export const Default = Template.bind({});

Default.args = {
	data: FOR_COMPANIES,
	nameButton: 'Подробнее',
	modeButton: 'more',
};

export const NotFoundInsuranceCase = Template.bind({});
NotFoundInsuranceCase.args = {
	data: FOR_REQUEST,
	nameButton: 'Отправить заявку',
	modeButton: 'submit-request',
};
