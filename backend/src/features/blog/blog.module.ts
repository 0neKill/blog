import { Module } from '@nestjs/common';
import { BlogController } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from './entities';
import { BlogRepository } from './repositories';
import { BlogService } from './services';
import { CheckerTokenModule } from '../../common';

@Module({
    imports: [TypeOrmModule.forFeature([BlogEntity]), CheckerTokenModule],
    controllers: [BlogController],
    providers: [BlogService, BlogRepository],
})
export class BlogModule {

}
