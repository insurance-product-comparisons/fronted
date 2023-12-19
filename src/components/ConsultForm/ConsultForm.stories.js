import { ConsultForm } from 'components';

export default {
	title: 'Components/ConsultForm',
	component: ConsultForm,
};

const Template = (arg) => <ConsultForm {...arg} />;

export const Default = Template.bind({});

Default.args = {};
