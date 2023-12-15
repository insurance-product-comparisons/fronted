import ConsultFrom from '.';

export default {
	title: 'Components/ConsultFrom',
	component: ConsultFrom,
	tags: ['autodocs'],
	argTypes: {},
};

const Template = (arg) => <ConsultFrom {...arg} />;

export const Default = Template.bind({});
Default.args = {};
