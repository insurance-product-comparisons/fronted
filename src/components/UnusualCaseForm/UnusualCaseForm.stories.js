import { UnusualCaseForm } from 'components';

export default {
	title: 'Components/UnusualCaseForm',
	component: UnusualCaseForm,
	tags: ['autodocs'],
	argTypes: {},
};

const Template = (arg) => <UnusualCaseForm {...arg} />;

export const Default = Template.bind({});
Default.args = {};
