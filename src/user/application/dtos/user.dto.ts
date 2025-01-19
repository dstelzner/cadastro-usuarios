import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEmail, IsString, IsUUID } from 'class-validator';

export class UserDto {
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'João Silva',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Email do usuário',
    example: 'joao@email.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Data de nascimento do usuário',
    example: new Date(),
  })
  @IsDateString()
  birthDate: Date;
}
