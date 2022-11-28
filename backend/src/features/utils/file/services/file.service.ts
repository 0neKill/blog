import { Injectable } from '@nestjs/common';
import { IFile } from '../../../user/__types__';
import * as fs from 'fs';
import * as path from 'path';


@Injectable()
export class FileService {

    public async save(file: IFile): Promise<string> {
        return new Promise((resolve, reject) => {
            const file_path = path.join(__dirname, '..', '..', '..', '..', '..', '/public/upload/');
            if (!fs.existsSync(file_path)) {
                fs.mkdirSync(file_path, { recursive: true });
            }
            fs.writeFile(path.join(file_path, file.filename), file.buffer, err => {
                if (err) {
                    reject(err);
                } else {
                    resolve(file.filename);
                }
            });
        });
    }
}