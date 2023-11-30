import RadioBtn from './RadioBtn'

export default {
    title: 'RadioBtn',
    component: RadioBtn,
    argTypes: {
        color: {
            type: 'string',
            description: 'Задает основной цвет для radio',
            defaultValue: '',
            options: ['primary', 'secondary'],
            control: {
                type: 'radio'
            }
        },
        className: {
            type: 'string',
            description: 'Задает дополнительные классы для компонента',
            control: 'text',
        },
        disabled: {
            type: Boolean,
            description: 'Устанавливает атрибут disabled',
            control: 'boolean',
        },
        label: {
            type: 'string',
            description: 'Задает текст лейбла для чекбокса',
            defaultValue: 'Label',
            control: 'text',
        },
        size: {
            type: 'string',
            description: 'Задает размер чекбокса',
            defaultValue: '',
            options: ['small', 'medium', 'large'],
            control: {
                type: 'radio'
            }
        },
    },
}

const Template = (arg) => <RadioBtn {...arg} /> 

export const Default = () => Template.bind({});
Default.args = {
    size: 'small', 
}
