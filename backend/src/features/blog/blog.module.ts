import { Module } from '@nestjs/common';
import { BlogController } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from './entities';
import { BlogRepository } from './repositories';
import { BlogService } from './services';

@Module({
    imports: [TypeOrmModule.forFeature([BlogEntity])],
    controllers: [BlogController],
    providers: [BlogRepository, BlogService],
})
export class BlogModule {

}