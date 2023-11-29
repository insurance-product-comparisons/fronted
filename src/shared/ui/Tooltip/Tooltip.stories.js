import { Tooltip } from './Tooltip'

export default {
    title: 'Tooltip',
    component: Tooltip,
    argTypes: {
        className: {
            type: 'string',
            description: 'Задает дополнительные классы для компонента',
            control: 'text',
        },
        size: {
            type: 'string',
            description: 'Задает размер элемента',
            defaultValue: '',
            options: ['small', 'medium'],
            control: {
                type: 'radio'
            }
        },
        placement: {
            type: 'string',
            description: 'Задает расположение для отображения',
            defaultValue: '',
            options: ['topleft', 'center', 'topright', 'bottomright', 'bottomleft'],
            control: {
                type: 'select'
            }
        },
        shape: {
            type: 'string',
            description: 'Задает скругление',
            defaultValue: '',
            options: ['geometric', 'rounded', 'circular'],
            control: {
                type: 'radio'
            }
        },
        title: {
            type: 'string',
            description: 'Задает заголовок',
            control: 'text',
        },
        subtitle: {
            type: 'string',
            description: 'Задает основной текст',
            control: 'text',
        }
    },
}

const Template = (arg) => <Tooltip {...arg} /> 

export const Default = () => Template.bind({});
Default.args = {
    size: 'small', 
}
