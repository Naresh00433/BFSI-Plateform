import { Password } from "@/lib/auth";
import { RegisterInput } from "../validations/register.schema";
import { UserRepository } from "../repositories/user.repository";

export class RegisterService {
  private readonly userRepository = new UserRepository();

  async execute(data: RegisterInput) {
    const email = data.email?.trim() || undefined;
    const phone = data.phone?.trim() || undefined;

    if (email) {
      const existingEmail = await this.userRepository.findByEmail(email);

      if (existingEmail) {
        throw new Error("Email is already registered.");
      }
    }

    if (phone) {
      const existingPhone = await this.userRepository.findByPhone(phone);

      if (existingPhone) {
        throw new Error("Phone number is already registered.");
      }
    }

    const passwordHash = await Password.hash(data.password);

    const user = await this.userRepository.create({
      firstName: data.firstName,
      lastName: data.lastName,
      email,
      phone,
      passwordHash,
    });

    return user;
  }
}
