import { UserModel } from './infrastructure/models/user.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserDatabaseRepository } from './infrastructure/repositories/user.repository';
import { UserController } from './presentation/controllers/user.controller';

@Module({
  imports: [SequelizeModule.forFeature([UserModel])],
  providers: [
    {
      provide: 'UserRepository',
      useClass: UserDatabaseRepository,
    },
  ],
  controllers: [UserController]
})
export class UserModule {}
