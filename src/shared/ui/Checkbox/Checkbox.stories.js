import { Checkbox } from './Checkbox'

export default {
    title: 'Checkbox',
    component: Checkbox,
    argTypes: {
        checked: {
            type: Boolean,
            description: 'Задает значение для состояния компонента',
            control: 'boolean',
        },
        color: {
            type: 'string',
            description: 'Задает цвет подложки для переключателя',
            defaultValue: '',
            options: ['primary', 'secondary'],
            control: {
                type: 'radio'
            }
        },
        className: {
            type: 'string',
            description: 'Задает дополнительные классы',
            control: 'text',
        },
        disabled: {
            type: Boolean,
            description: 'Устанавливает атрибут disabled',
            control: 'boolean',
        },
        label: {
            type: 'string',
            description: 'Устанавливает текст возле компонента',
            defaultValue: 'Сменить цветовую тему',
            control: 'text',
        },
        labelPosition: {
            type: 'string',
            description: 'Задает расположение текста относительно компонента',
            defaultValue: '',
            options: ['right', 'left'],
            control: {
                type: 'radio'
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
        size: {
            type: 'string',
            description: 'Задает размер элемента',
            defaultValue: '',
            options: ['small', 'medium', 'large'],
            control: {
                type: 'radio'
            }
        },
    },
}

const Template = (arg) => <Checkbox {...arg} /> 

export const Default = () => Template.bind({});
Default.args = {
    size: 'small', 
}
