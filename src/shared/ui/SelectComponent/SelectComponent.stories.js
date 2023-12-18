import { SelectComponent } from 'shared/ui';

export default {
	title: 'UI-KIT/SelectComponent',
	component: SelectComponent,
	tags: ['autodocs'],
};

const Template = (arg) => <SelectComponent {...arg} />;

export const Default = Template.bind({});
// Primary.args = {
// 	children: 'Button',
// 	disabled: false,
// 	bgcolor: 'accent',
// 	mode: 'submit-form',
// };
