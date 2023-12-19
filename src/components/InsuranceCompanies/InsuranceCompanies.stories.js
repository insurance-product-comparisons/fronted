import { InsuranceCompanies } from 'components';

export default {
	title: 'Components/InsuranceCompanies',
	component: InsuranceCompanies,
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
	title: 'Страховым компаниям',
	description:
		'Мы привлекаем страховые компании для страхования имущества и здоровья клиентов. Ознакомьтесь с обязательными требованиями и условиями.',
	nameButton: 'Подробнее',
	modeButton: 'more',
	disabled: false,
};

export const NotFoundInsuranceCase = Template.bind({});
NotFoundInsuranceCase.args = {
	title: 'Не нашли в каталоге свой страховой случай?',
	description:
		'Если вы не увидели в каталоге нужный вам страховой случай, то вы можете отправить заявку. В течение 2 рабочих дней мы рассмотрим ваш запрос и ответим на указанный email.',
	nameButton: 'Отправить заявку',
	modeButton: 'submit-request',
	disabled: false,
};
