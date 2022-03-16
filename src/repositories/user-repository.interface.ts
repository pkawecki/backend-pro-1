import { User } from "./../interfaces/user.interface";
import { BaseRepository } from "./base-repository.interface";

export interface UserRepository extends BaseRepository<User> {
  findUserByName(name: string): User;
}
