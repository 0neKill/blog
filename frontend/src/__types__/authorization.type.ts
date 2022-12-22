import { SingInformSchema, SingUpFormSchema, Routes } from 'helpers';

export type CreateInitialData = () => {
    initialState: InitialStateForAuth,
    dataBlog: {
        to: Routes,
        titleLink: string,
        titleBtn: string
        className?: string
    }
    validateSchema: typeof SingInformSchema | typeof SingUpFormSchema,
}
export type InitialStateForAuth = {
    password: '',
    email: '',
    repeat_password?: '',
    skill?: '',
    user_name?: '',
}
