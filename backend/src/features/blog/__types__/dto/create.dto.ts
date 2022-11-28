import {  IsNotEmpty, MinLength, IsEnum } from 'class-validator';
import { Categories } from '../../entities';

export class CreateDto {

    @IsNotEmpty({ message: 'Поле не может быть пустым' })
    readonly text: string;

    @IsNotEmpty({ message: 'Поле не может быть пустым' })
    @MinLength(2, { message: 'Поле не может быть пустым' })
    readonly title: string;

    @IsNotEmpty({ message: 'Поле не может быть пустым' })
    @IsEnum(Categories)
    readonly category: Categories;
}
