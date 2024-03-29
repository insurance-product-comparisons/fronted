import { SelectComponent } from 'shared/ui';
import { OPTIONS_SORT } from 'shared/store/sortOptions';

export default {
	title: 'UI-KIT/SelectComponent',
	component: SelectComponent,
	tags: ['autodocs'],
	argTypes: {
		options: {
			name: 'Входящие данные',
			description: 'Массив объектов с опциями селекта',
			type: 'array',
			control: { control: 'object' },
		},
		mode: {
			type: 'string',
			description: 'Задает дополнительные классы для компонента',
		},
		placeholder: {
			type: 'string',
			description: 'Задает плейсхолдер для селекта',
			defaultValue: 'Label',
			control: 'text',
		},
	},
};

const Template = (arg) => <SelectComponent {...arg} />;

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];

export const Default = Template.bind({});
Default.args = {
	options: options,
	placeholder: '',
};

export const Sort = Template.bind({});
Sort.args = {
	options: OPTIONS_SORT,
	placeholder: '',
	mode: 'sort',
};
