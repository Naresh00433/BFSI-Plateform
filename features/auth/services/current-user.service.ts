import { UnauthorizedError } from "@/lib/errors";
import { UserRepository } from "../repositories/user.repository";
import { UserMapper } from "../utils/user.mapper";

export class CurrentUserService {
  private readonly userRepository = new UserRepository();

  async execute(identifier: string) {
    const user =
      await this.userRepository.findByEmailOrPhone(identifier);

    if (!user) {
      throw new UnauthorizedError("User not found");
    }

    return UserMapper.toResponse(user);
  }
}