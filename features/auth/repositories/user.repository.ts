import { prisma } from "@/lib/prisma/client";
import { User } from "@prisma/client";
import { UserWithRelations } from "../types/user-with-relations";

export interface CreateUserData {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  passwordHash: string;
}

export class UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  async findByPhone(phone: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { phone },
    });
  }

  async findByEmailOrPhone(
    identifier: string,
  ): Promise<UserWithRelations | null> {
    return prisma.user.findFirst({
      where: {
        deletedAt: null,
        OR: [
          {
            email: identifier,
          },
          {
            phone: identifier,
          },
        ],
      },
      include: {
        profile: true,
        roles: {
          include: {
            role: true,
          },
        },
      },
    });
  }

  async create(data: CreateUserData): Promise<User> {
    return prisma.user.create({
      data: {
        email: data.email ?? null,
        phone: data.phone ?? null,
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
