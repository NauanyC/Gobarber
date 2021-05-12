import { getRepository } from "typeorm";
import { hash } from "bcryptjs";
import User from "../models/User";
import AppError from "../errors/AppError";

interface Request {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExits = await usersRepository.findOne({ where: { email } });

    if (checkUserExits) {
      throw new AppError("Email address already used");
    }

    const hashedPassword = await hash(password, 12);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}
