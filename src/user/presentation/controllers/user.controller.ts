import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/user/application/dtos/user.dto';
import { CreateUserUseCase } from 'src/user/application/usecases/create_user.usecase';
import { DeleteUserUseCase } from 'src/user/application/usecases/delete_user.usecase';
import { GetAllUsersUseCase } from 'src/user/application/usecases/get_all_user.usecase';
import { GetUserByIdUseCase } from 'src/user/application/usecases/get_user_by_id.usecase';
import { UpdateUserUseCase } from 'src/user/application/usecases/update_user.usecase';
import { User } from 'src/user/domain/entities/user.entity';
import { UserDatabaseRepository } from 'src/user/infrastructure/repositories/user.repository';

@ApiTags('Usuário')
@Controller('users')
export class UserController {
  private createUserUsecase: CreateUserUseCase;
  private updateUserUsecase: UpdateUserUseCase;
  private getAllUsersUsecase: GetAllUsersUseCase;
  private getUserByIdUsecase: GetUserByIdUseCase;
  private deleteUserUsecase: DeleteUserUseCase;

  constructor(
    @Inject('UserRepository') userRepository: UserDatabaseRepository,
  ) {
    this.createUserUsecase = new CreateUserUseCase(userRepository);
    this.updateUserUsecase = new UpdateUserUseCase(userRepository);
    this.getAllUsersUsecase = new GetAllUsersUseCase(userRepository);
    this.getUserByIdUsecase = new GetUserByIdUseCase(userRepository);
    this.deleteUserUsecase = new DeleteUserUseCase(userRepository);
  }

  @Get()
  @ApiOperation({ summary: 'Retorna todos os usuários' })
  @ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso.' })
  async getAll(): Promise<User[]> {
    return await this.getAllUsersUsecase.execute();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna usuário por id' })
  @ApiResponse({ status: 200, description: 'Usuário retornado com sucesso.' })
  async getById(@Param('id') id: string): Promise<User> {
    const user = await this.getUserByIdUsecase.execute(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta usuário' })
  @ApiResponse({ status: 200, description: 'Usuário deletado com sucesso.' })
  async delete(@Param('id') id: string) {
    await this.deleteUserUsecase.execute(id);
  }

  @Post()
  @ApiOperation({ summary: 'Cria usuário' })
  @ApiResponse({ status: 200, description: 'Usuário criado com sucesso.' })
  async create(@Body() body: UserDto) {
    return await this.createUserUsecase.execute(body);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza usuário' })
  @ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso.' })
  async update(@Param('id') id: string, @Body() body: UserDto) {
    return await this.updateUserUsecase.execute(id, body);
  }
}
