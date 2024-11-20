import { SequelizeModuleOptions } from '@nestjs/sequelize';

const sequelizeConfig: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: 'database.sqlite',
  autoLoadModels: true,
  synchronize: true,
};

export default sequelizeConfig;
