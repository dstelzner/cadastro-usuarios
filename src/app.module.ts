import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import sequelizeConfig from '../ormconfig';

@Module({
  imports: [
    SequelizeModule.forRoot(sequelizeConfig),
    UserModule,
    SequelizeModule,
  ],
})
export class AppModule {}
