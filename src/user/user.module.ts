import { UserModel } from './infrastructure/models/user.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserDatabaseRepository } from './infrastructure/repositories/user.repository';

@Module({
  imports: [SequelizeModule.forFeature([UserModel])],
  providers: [
    {
      provide: 'UserRepository',
      useClass: UserDatabaseRepository,
    },
  ],
  exports: ['UserRepository'],
})
export class UserModule {}
