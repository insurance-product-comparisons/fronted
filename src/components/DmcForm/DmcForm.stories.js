import { DmcForm } from 'components';

export default {
	title: 'Components/DmcForm',
	component: DmcForm,
};

const Template = (args) => <DmcForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
