import { User } from '../entities/user.entity';

export interface UserRepository {
  /**
   * Finds user by id.
   * @param id User id.
   * @returns User found or null otherwise.
   */
  findById(id: string): Promise<User | null>;

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
  delete(user: User): Promise<string>;

  /**
   * Updates user.
   * @param user User to be updated.
   * @returns User updated.
   */
  update(user: User): Promise<User>;
}
