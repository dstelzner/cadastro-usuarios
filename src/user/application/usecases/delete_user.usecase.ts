import { UserRepository } from 'src/user/domain/repositories/user.repository';

export class DeleteUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(id: string) {
    await this.repository.delete(id);
  }
}
