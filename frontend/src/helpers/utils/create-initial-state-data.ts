import { CreateInitialData } from '__types__';
import { Routes } from '../routes';
import { SingInformSchema, SingUpFormSchema } from '../validations';

export const createInitialSingInData: CreateInitialData = () => ({
    initialState: {
        password: '',
        email: '',
    },
    dataBlog: {
        to: Routes.SING_UP,
        titleBtn: 'Sing in',
        titleLink: 'Create new account',
    },
    validateSchema: SingInformSchema,
});

export const createInitialSingUpData: CreateInitialData = () => ({
    initialState: {
        password: '',
        email: '',
        repeat_password: '',
        skill: '',
        user_name: '',
    },
    dataBlog: {
        to: Routes.SING_IN,
        titleBtn: 'Sing up',
        titleLink: 'Sing in',
    },
    validateSchema: SingUpFormSchema,
});
