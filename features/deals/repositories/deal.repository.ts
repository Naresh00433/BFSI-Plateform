import { prisma } from "@/lib/prisma/client";
import { Deal, DealStatus, Prisma } from "@prisma/client";

import { CreateDealDto } from "../dto/create-deal.dto";
import { DealFilter } from "../types/deal-filter.type";

export class DealRepository {
  async findBySlug(slug: string): Promise<Deal | null> {
    return prisma.deal.findFirst({
      where: {
        slug,
        deletedAt: null,
      },
    });
  }

  async create(data: CreateDealDto): Promise<Deal> {
    return prisma.deal.create({
      data,
    });
  }

  async findById(id: string) {
    return prisma.deal.findFirst({
      where: {
        id,
        deletedAt: null,
      },
      include: {
        product: {
          include: {
            bank: true,
            category: true,
          },
        },
        coupons: true,
      },
    });
  }

  async update(id: string, data: Prisma.DealUpdateInput) {
    return prisma.deal.update({
      where: {
        id,
      },
      data,
    });
  }

  async updateStatus(id: string, status: DealStatus) {
    return prisma.deal.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
  }

  async softDelete(id: string) {
    return prisma.deal.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  async findAll(filter: DealFilter) {
    const {
      page = 1,
      limit = 10,
      search,
      productId,
      status,
      featured,
      sortBy = "priority",
      sortOrder = "asc",
    } = filter;

    const where: Prisma.DealWhereInput = {
      deletedAt: null,
    };

    if (search) {
      where.OR = [
        {
          title: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: search,
            mode: "insensitive",
          },
        },
      ];
    }

    if (productId) {
      where.productId = productId;
    }

    if (status) {
      where.status = status;
    }

    if (featured !== undefined) {
      where.featured = featured;
    }

    const [deals, total] = await prisma.$transaction([
      prisma.deal.findMany({
        where,
        include: {
          product: {
            include: {
              bank: true,
              category: true,
            },
          },
        },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: {
          [sortBy]: sortOrder,
        },
      }),

      prisma.deal.count({
        where,
      }),
    ]);

    return {
      data: deals,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
