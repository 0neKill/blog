import { string, object, ref } from 'yup';

export const SingUpFormSchema = object().shape({
    user_name: string()
        .min(1, 'Слишком короткое')
        .max(50, 'Слишком длинное')
        .required('Обязательное поле'),
    skill: string()
        .min(1, 'Слишком короткое')
        .max(50, 'Слишком длинное')
        .required('Обязательное поле'),
    password: string()
        .min(1, 'Слишком короткое')
        .max(50, 'Слишком длинное')
        .required('Обязательное поле'),
    repeat_password: string()
        .required('Обязательное поле')
        .oneOf([ref('password'), null], 'Пароли не совпадают'),
    email: string().email('Неверный E-mail').required('Обязательное поле'),
});

export const SingInformSchema = object().shape({
    email: string().email('Неверный E-mail').required('Обязательное поле'),
    password: string()
        .min(1, 'Слишком короткое')
        .max(50, 'Слишком длинное')
        .required('Обязательное поле'),
});
