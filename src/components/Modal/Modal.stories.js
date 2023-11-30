import Modal from './Modal';

export default {
	title: 'Modal',
	component: Modal,
	argTypes: {
		maxWidth: {
			type: 'string',
			description: 'Задает максимальную ширину модального окна',
			control: 'text',
		},
		maxHeight: {
			type: 'string',
			description: 'Задает максимальную ширину модального окна',
			control: 'text',
		},
		isOpen: {
			type: Boolean,
			description: 'State модального окна',
			control: 'boolean',
		},
		showOverlay: {
			type: Boolean,
			description: 'State модального окна',
			control: 'boolean',
		},
		className: {
			type: 'string',
			description: 'Задает дополнительные классы для компонента',
			control: 'text',
		},
	},
};

const Template = (arg) => <Modal {...arg} />;

export const Default = () => Template.bind({});
Default.args = {
	maxWidth: '450px',
};
