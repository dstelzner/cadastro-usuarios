import { User } from '../entities/user.entity';

export interface UserRepository {
  /**
   * Finds user by id.
   * @param id User id.
   * @returns User found or null otherwise.
   */
  findById(id: string): Promise<User | null>;

  /**
   * Finds all users.
   * @returns Users found.
   */
  findAll(): Promise<User[]>;

  /**
   * Creates user.
   * @param user User.
   * @returns User created.
   */
  create(user: User): Promise<User>;

  /**
   * Deletes user.
   * @param user User.
   * @returns User id of the deleted user.
   */
  delete(id: string): Promise<void>;

  /**
   * Updates user.
   * @param user User to be updated.
   * @returns User updated.
   */
  update(user: User): Promise<User>;
}
