import { User } from 'src/user/domain/entities/user.entity';
import { UserRepository } from 'src/user/domain/repositories/user.repository';
import { UserModel } from '../models/user.model';

export class UserDatabaseRepository implements UserRepository {
  toDomain(userModel: UserModel): User {
    return new User(userModel);
  }

  async findById(id: string): Promise<User | null> {
    const userModel = await UserModel.findByPk(id);
    return this.toDomain(userModel);
  }

  async create(user: User): Promise<User> {
    const userModel = await UserModel.create({ ...user });
    return this.toDomain(userModel);
  }

  async delete(user: User): Promise<string> {
    await UserModel.destroy({ where: { id: user.id } });
    return user.id;
  }

  async update(user: User): Promise<User> {
    await UserModel.update(user, { where: { id: user.id } });
    return user;
  }
}
