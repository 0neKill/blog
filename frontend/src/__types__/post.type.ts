export enum Categories { 'UI Design' = 'UI Design', 'Front-end' = 'Front-end', 'Back-end' = 'Back-end'}

export interface Post {
    id: string;
    title: string;
    text: string;
    category: Categories;
    backgroundImage: string,
    user: User;
    created_at: Date;
}

export interface User {
    id: number;
    email: string;
    name: string;
    avatar?: string;
    skill: string;
}
