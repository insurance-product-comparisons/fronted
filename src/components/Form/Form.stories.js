import Form from './Form'

export default {
    title: 'Form',
    component: Form,
    argTypes: {
        children: {
            type: 'string',
            description: 'Задает наименование формы',
            control: 'text'
        },
        description: {
            type: 'string',
            description: 'Задает описание формы',
            control: 'text'
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
    },
}

const Template = (arg) => <Form {...arg} /> 

export const Default = () => Template.bind({});
Default.args = {
    children: 'Форма'
};

export const OsagoFrom = () => Template.bind({});
OsagoFrom.args = {
    children: 'Форма ОСАГО'
};

export const DmsFrom = () => Template.bind({});
DmsFrom.args = {
    children: 'Форма ДМС'
};

export const KaskoFrom = () => Template.bind({});
KaskoFrom.args = {
    children: 'Форма KACKO'
};

export const ConsultFrom = () => Template.bind({});
ConsultFrom.args = {
    children: 'Форма заявки на консультацию'
};
