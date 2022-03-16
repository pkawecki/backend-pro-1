import { UserRepository } from "./../repositories/user-repository.interface";
import { User } from "./../interfaces/user.interface";
import BaseController from "./base-controller";

export class UserController extends BaseController<User> {
  constructor(private usersRepository: UserRepository) {
    super(usersRepository);
  }

  findUserByName(name: string): User {
    return this.usersRepository.findUserByName(name);
  }
}
