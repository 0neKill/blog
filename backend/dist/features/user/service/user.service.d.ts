import { UserRepository } from '../repository';
import { UserEntity } from '../entity';
import { DataForCreate, FieldBySearch, IUserService } from '../__types__/interfaces';
export declare class UserService implements IUserService {
    private readonly _userRepository;
    constructor(userRepository: UserRepository);
    create(user: DataForCreate): Promise<UserEntity>;
    existUserBy(field: FieldBySearch): Promise<boolean>;
    getExistUserBy(field: FieldBySearch): Promise<UserEntity>;
}
