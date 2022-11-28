import { HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { IFile } from '../../../user/__types__';

@Injectable()
export class FileTypeValidatePipe implements PipeTransform<IFile, IFile> {
    transform(file: IFile): IFile {
        if (!file) {
            throw new HttpException('Нет файла', HttpStatus.BAD_REQUEST);
        }

        if (!FileTypeValidatePipe._isEqualTypeFile(file.mimetype)) {
            throw new HttpException('Не тот формат', HttpStatus.BAD_REQUEST);
        }

        const dateTimestamp = Date.now();
        file.filename = file.fieldname + '-' + dateTimestamp + '.' + file.mimetype.split('/')[1];

        return file;
    }

    private static _isEqualTypeFile(mimetype: string): boolean {
        return !!mimetype.match(/\/(jpg|jpeg|png|gif)$/);
    }
}