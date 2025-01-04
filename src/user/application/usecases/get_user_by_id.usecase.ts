import { User } from 'src/user/domain/entities/user.entity';
import { UserRepository } from 'src/user/domain/repositories/user.repository';

export class GetUserByIdUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(id: string): Promise<User> {
    return await this.repository.findById(id);
  }
}
