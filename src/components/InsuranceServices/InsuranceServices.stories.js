import { InsuranceServices } from 'components';
import { SERVICES_TINKOFF } from 'shared/store/servicesTinkoff';

export default {
	title: 'Components/Услуги страховой компании',
	component: InsuranceServices,
	tags: ['autodocs'],
};

const Template = (arg) => <InsuranceServices {...arg} />;

export const Default = Template.bind({});

Default.args = {
	data: SERVICES_TINKOFF,
};
