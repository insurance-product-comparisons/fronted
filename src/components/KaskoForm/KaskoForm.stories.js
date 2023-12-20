import { KaskoForm } from 'components';

export default {
	title: 'Components/KaskoForm',
	component: KaskoForm,
};

const Template = (args) => <KaskoForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
