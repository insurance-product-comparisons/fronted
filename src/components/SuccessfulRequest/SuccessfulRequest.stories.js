import { SuccessfulRequest } from 'components';

export default {
	title: 'Components/SuccessfulRequest',
	component: SuccessfulRequest,
};

const Template = (args) => <SuccessfulRequest {...args} />;

export const Default = Template.bind({});

Default.args = {
	type: 'main',
	text: 'Наш менеджер свяжется с вами в течение часа.',
};

export const UnusualCase = Template.bind({});

UnusualCase.args = {
	type: 'unusual-case',
	text: 'Подтверждение придет вам на электронную почту.',
};
