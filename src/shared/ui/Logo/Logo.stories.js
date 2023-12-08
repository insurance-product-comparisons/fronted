import Logo from '.';

export default {
	title: 'UI-KIT/Logo',
	component: Logo,
	argTypes: {
		mode: {
			type: 'string',
			description: 'Задает дополнительные классы для компонента',
			control: 'text',
		},
	},
};

const Template = (arg) => <Logo {...arg} />;

export const Default = Template.bind({});
Default.args = {
	mode: 'main'
};

export const InsuranceLogo = Template.bind({});
InsuranceLogo.args = {
	mode: 'insurance'
};
