import { UserRepository } from 'src/user/domain/repositories/user.repository';
import { UserDto } from '../dtos/user.dto';
import { User } from 'src/user/domain/entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

export class CreateUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(userDto: UserDto): Promise<User> {
    const user = new User({
      id: uuidv4(),
      name: userDto.name,
      email: userDto.email,
      birthDate: userDto.birthDate,
    });

    return await this.repository.create(user);
  }
}
