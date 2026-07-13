import { prisma } from "@/lib/prisma/client";
import { Bank } from "@prisma/client";

import { CreateBankDto } from "../dto/create-bank.dto";

import { Prisma } from "@prisma/client";
import { BankFilter } from "../types/bank-filter.type";

export class BankRepository {
  async findBySlug(slug: string): Promise<Bank | null> {
    return prisma.bank.findUnique({
      where: {
        slug,
      },
    });
  }

  async create(data: CreateBankDto): Promise<Bank> {
    return prisma.bank.create({
      data,
    });
  }

  async findAll(filter: BankFilter) {
    const {
      page = 1,
      limit = 10,
      search,
      status,
      sortBy = "priority",
      sortOrder = "asc",
    } = filter;

    const where: Prisma.BankWhereInput = {
      deletedAt: null,
    };

    if (search) {
      where.OR = [
        {
          name: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          shortName: {
            contains: search,
            mode: "insensitive",
          },
        },
      ];
    }

    if (status) {
      where.status = status;
    }

    const [banks, total] = await prisma.$transaction([
      prisma.bank.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: {
          [sortBy]: sortOrder,
        },
      }),

      prisma.bank.count({
        where,
      }),
    ]);

    return {
      data: banks,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
