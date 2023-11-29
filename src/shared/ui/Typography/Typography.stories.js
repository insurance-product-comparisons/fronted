import { Typography } from './Typography'

export default {
    title: 'Typography',
    component: Typography,
    argTypes: {
        children: {
            type: 'string',
            description: 'Задает текст типографики',
            control: 'text',
        },
        className: {
            type: 'string',
            description: 'Задает дополнительные классы для компонента',
            control: 'text',
        },
        color: {
            type: 'string',
            description: 'Задает цвет для компонента',
            defaultValue: '',
            options: ['main', 'title', 'subtitle', 'error', 'warning', 
            'success', 'disabled', 'primary', 'secondry'],
            control: {
                type: 'select'
            }
        },
        spacing: {
            type: 'string',
            description: 'Задает внутренний отступ',
            defaultValue: '',
            options: ['s', 'm', 'l'],
            control: {
                type: 'radio'
            }
        },
        spacingBottom: {
            type: 'string',
            description: 'Задает внешний отступ снизу',
            defaultValue: '',
            options: ['s', 'm', 'l'],
            control: {
                type: 'radio'
            }
        },
        spacingTop: {
            type: 'string',
            description: 'Задает внешний отступ вверху',
            defaultValue: '',
            options: ['s', 'm', 'l'],
            control: {
                type: 'radio'
            }
        },
        variant: {
            type: 'string',
            description: 'Задает вариант типографики, от которого зависит размер шрифта',
            defaultValue: '',
            options: ['description', 'h1', 'h2'],
            control: {
                type: 'select'
            }
        }
    },
}

const Template = (arg) => <Typography {...arg} /> 

export const Default = () => Template.bind({});
Default.args = {
    variant: 'h1', 
}
