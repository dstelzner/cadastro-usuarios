import { User } from 'src/user/domain/entities/user.entity';
import { UserRepository } from 'src/user/domain/repositories/user.repository';

export class GetAllUsersUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(): Promise<User[]> {
    return await this.repository.findAll();
  }
}
