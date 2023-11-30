import Box from './Box'

export default {
    title: 'Box',
    component: Box,
    argTypes: {
        children: {
            type: 'string',
            description: 'Задает текст для контейнера',
            control: 'text',
        }, 
        border: {
            type: 'number', 
            description: 'Задает границу контейнера в пикселях',
            control: { 
                type: 'number', min:1, max:10,
            }
        }, 
        borderRadius: { 
            type: 'number', 
            description: 'Задает радиус для границ контейнера в пикселях',
            control: { 
                type: 'number', min:1, max:100,
            }
        },
        color: {
            type: 'string',
            description: 'Задает основной цвет',
            defaultValue: '',
            options: ['primary', 'secondary'],
            control: {
                type: 'radio'
            }
        }
    },
}

const Template = (arg) => <Box {...arg} /> 

export const Default = () => Template.bind({});
Default.args = {
    color: 'primary', 
}
