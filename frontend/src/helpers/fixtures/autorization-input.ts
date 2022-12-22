import { InitialStateForAuth } from '../../__types__';

interface Input {
    name: keyof InitialStateForAuth,
    placeholder: string,
    type: 'password' | 'text';
}

export const singInInput: Input[] = [
    {
        name: 'email',
        placeholder: 'Email',
        type: 'text',
    },
    {
        name: 'password',
        placeholder: 'Password',
        type: 'password',
    },
];
export const singUpInput: Input[] = [
    {
        name: 'email',
        placeholder: 'Email',
        type: 'text',
    },
    {
        name: 'user_name',
        placeholder: 'Name',
        type: 'text',
    },
    {
        name: 'password',
        placeholder: 'Password',
        type: 'password',
    },
    {
        name: 'repeat_password',
        placeholder: 'Repeat password',
        type: 'password',
    },
    {
        name: 'skill',
        placeholder: 'Skill',
        type: 'text',
    },
];

