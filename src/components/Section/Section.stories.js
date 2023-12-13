import { Typography } from 'shared/ui';
import Section from '.'

export default {
	title: 'Components/Section',
	component: Section,
    tags: ['autodocs'],
	argTypes: {
		children: {
			description: 'Задает данные для секции',
			control: 'object',
		},
	},
};

const Template = (arg) => <Section {...arg} />;

export const Default = Template.bind({});
Default.args = {
    children: 
    <>
    <Typography 
    variant='h2'
    children='Заголовок секции'
    color='black'/>
    <Typography 
    variant='body1'
    children='Это текст секции и он может быть абсолютно любым!'
    color='grey'/>
    </>
}
