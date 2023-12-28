import { SuccessfulRequest } from 'components';

export default {
	title: 'Components/SuccessfulRequest',
	component: SuccessfulRequest,
};

const Template = (args) => <SuccessfulRequest {...args} />;

export const Default = Template.bind({});

Default.args = {
	title: 'Заявка на консультацию',
	type: 'main',
	text: 'Наш менеджер свяжется с вами в течение часа.',
};

export const UnusualCase = Template.bind({});

UnusualCase.args = {
	title: 'Заявка на ситуацию, которой нет в каталоге',
	type: 'unusual-case',
	text: 'Подтверждение придет вам на электронную почту.',
};
