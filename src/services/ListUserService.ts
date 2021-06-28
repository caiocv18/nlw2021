import { classToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
class ListUserService {
  async execute() {
    const userRepositories = getCustomRepository(UsersRepositories);

    const users = userRepositories.find();

    return classToPlain(users);
  }
}

export { ListUserService }