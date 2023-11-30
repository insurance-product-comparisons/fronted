import Card from './Card'

export default {
    title: 'Card',
    component: Card,
    argTypes: {
        title: {
            type: 'string',
            description: 'Задает название карточки',
            control: 'text'
        },
        rate: {
            type: 'number',
            description: 'Устанавливает количество звезд рейтинга',
            control: { 
                type: 'number', min:1, max:5,
            }
        },
        color: {
            type: 'string',
            description: 'Задает основной цвет',
            options: ['primary', 'secondary'],
            control: {
                type: 'radio'
            }
        },
        textColor: {
            type: 'string',
            description: 'Задает цвет текста',
            options: ['primary', 'secondary'],
            control: {
                type: 'radio'
            }
        },
        height: {
            type: 'string',
            description: 'Задает высоту карточки',
            control: 'text',
        },
        width: {
            type: 'string',
            description: 'Задает ширину карточки',
            control: 'text',
        },
    },
}

const Template = (arg) => <Card {...arg} /> 

export const Default = () => Template.bind({});
Default.args = {
    title: 'Название страховой компании'
}
