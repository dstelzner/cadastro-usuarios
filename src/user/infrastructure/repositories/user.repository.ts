import { User } from 'src/user/domain/entities/user.entity';
import { UserRepository } from 'src/user/domain/repositories/user.repository';
import { UserModel } from '../models/user.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserDatabaseRepository implements UserRepository {
  toDomain(userModel: UserModel): User {
    return new User(userModel);
  }

  async findById(id: string): Promise<User | null> {
    const userModel = await UserModel.findByPk(id);

    if (!userModel) return null;

    return this.toDomain(userModel);
  }

  async findAll(): Promise<User[]> {
    const users = await UserModel.findAll();

    if (!users) return null;

    return users.map((user) => this.toDomain(user));
  }

  async create(user: User): Promise<User> {
    const userModel = await UserModel.create({ ...user });
    return this.toDomain(userModel);
  }

  async delete(id: string): Promise<void> {
    await UserModel.destroy({ where: { id } });
  }

  async update(user: User): Promise<User> {
    await UserModel.update(user, { where: { id: user.id } });
    return user;
  }
}
