import React from 'react';
import AccordionItem from '.';

export default {
	title: 'UI-KIT/AccordionItem',
	component: AccordionItem,
	tags: ['autodocs'],
	argTypes: {
		id: {
			type: 'string',
			description: 'ID пункта меню',
			control: 'none',
		},
		activeId: {
			type: 'string',
			description: 'ID активного пункта меню',
			control: 'radio',
			options: ['active', 'unactive'],
		},
		title: {
			type: 'string',
			description: 'Заголовок пункта меню',
		},
		content: {
			type: 'string',
			description: 'Выпадающий текст меню',
		},
	},
};

const Template = (args) => <AccordionItem {...args} onClick={() => {}} />;

export const Default = Template.bind({});
Default.args = {
	id: 'active',
	activeId: 'unactive',
	title: 'Что такое ОСАГО?',
	content:
		'Аббревиатура ОСАГО расшифровывается как обязательное страхование автогражданской ответственности. То есть это не страховка самой машины, а защита на случай, если водитель стал виновником аварии и повредил чужое имущество или есть пострадавшие: тогда страховая компания возместит ущерб. При этом за ремонт своей машины водитель заплатит сам.',
};
