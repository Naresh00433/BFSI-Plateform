import { prisma } from "@/lib/prisma/client";
import { User } from "@prisma/client";

export class UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async findByPhone(phone: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: {
        phone,
      },
    });
  }

  async create(data: {
    firstName: string;
    lastName: string;
    email?: string;
    phone?: string;
    passwordHash: string;
  }): Promise<User> {
    return prisma.user.create({
      data: {
        email: data.email || null,
        phone: data.phone || null,
        passwordHash: data.passwordHash,

        profile: {
          create: {
            firstName: data.firstName,
            lastName: data.lastName,
          },
        },
      },
    });
  }
}