import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import sequelizeConfig from '../ormconfig';

@Module({
  imports: [
    SequelizeModule.forRoot(sequelizeConfig),
    UserModule,
    SequelizeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
