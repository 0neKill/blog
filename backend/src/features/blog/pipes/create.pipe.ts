import { ArgumentMetadata, HttpException, HttpStatus, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateDto } from '../__types__/dto';


export class CreatePipe implements PipeTransform<CreateDto, Promise<CreateDto>> {
    async transform(value: CreateDto, { metatype }: ArgumentMetadata): Promise<CreateDto> {

        const object = plainToClass(metatype, value);
        const errors = await validate(object);

        if (errors.length) {
            const message = errors.map(item => (
                `${item.property}: ${Object.values(item.constraints ?? item.children[0].constraints).join(', ')}`
            ));
            throw new HttpException(message, HttpStatus.BAD_REQUEST);
        }

        return object;
    }

}
