import { DataTypes } from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class UserModel extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataTypes.UUIDV4,
  })
  id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @Column({ type: DataType.DATE, allowNull: false })
  birthDate: Date;
}
