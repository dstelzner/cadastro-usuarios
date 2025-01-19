import { UserRepository } from 'src/user/domain/repositories/user.repository';
import { UserDto } from '../dtos/user.dto';
import { User } from 'src/user/domain/entities/user.entity';

export class UpdateUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(id: string,
    userDto: UserDto): Promise<User> {
    const user = new User({
      id,
      name: userDto.name,
      email: userDto.email,
      birthDate: userDto.birthDate,
    });

    return await this.repository.update(user);
  }
}
