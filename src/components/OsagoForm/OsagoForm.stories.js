import { OsagoForm } from 'components';

export default {
	title: 'Components/OsagoForm',
	component: OsagoForm,
	tags: ['autodocs'],
};

const Template = (arg) => <OsagoForm {...arg} />;

export const Default = Template.bind({});

Default.args = {};
