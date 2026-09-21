import { prisma } from "@/lib/prisma/client";
import { Coupon, CouponStatus, Prisma } from "@prisma/client";

import { CreateCouponDto } from "../dto/create-coupon.dto";
import { UpdateCouponDto } from "../dto/update-coupon.dto";
import { CouponFilter } from "../types/coupon-filter.type";

export class CouponRepository {
  async findByCode(code: string): Promise<Coupon | null> {
    return prisma.coupon.findUnique({
      where: { code },
    });
  }

  async create(data: CreateCouponDto): Promise<Coupon> {
    return prisma.coupon.create({
      data: {
        productId: data.productId,
        dealId: data.dealId,
        code: data.code,
        title: data.title,
        description: data.description,
        discount: data.discount,
        cashback: data.cashback,
        validFrom: data.validFrom,
        validUntil: data.validUntil,
        usageLimit: data.usageLimit,
      },
    });
  }

  async findById(id: string) {
    return prisma.coupon.findFirst({
      where: {
        id,
        deletedAt: null,
      },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
        deal: {
          select: {
            id: true,
            title: true,
            slug: true,
          },
        },
      },
    });
  }

  async update(id: string, data: UpdateCouponDto) {
    return prisma.coupon.update({
      where: { id },
      data: {
        productId: data.productId,
        dealId: data.dealId,
        code: data.code,
        title: data.title,
        description: data.description,
        discount: data.discount,
        cashback: data.cashback,
        validFrom: data.validFrom,
        validUntil: data.validUntil,
        usageLimit: data.usageLimit,
      },
    });
  }

  async updateStatus(id: string, status: CouponStatus) {
    return prisma.coupon.update({
      where: { id },
      data: { status },
    });
  }

  async softDelete(id: string) {
    return prisma.coupon.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  async findAll(filter: CouponFilter) {
    const {
      page = 1,
      limit = 10,
      search,
      productId,
      dealId,
      status,
      sortBy = "createdAt",
      sortOrder = "desc",
    } = filter;

    const where: Prisma.CouponWhereInput = {
      deletedAt: null,
    };

    if (search) {
      where.OR = [
        {
          code: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          title: {
            contains: search,
            mode: "insensitive",
          },
        },
      ];
    }

    if (productId) {
      where.productId = productId;
    }

    if (dealId) {
      where.dealId = dealId;
    }

    if (status) {
      where.status = status;
    }

    const [coupons, total] = await prisma.$transaction([
      prisma.coupon.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,

        orderBy: {
          [sortBy]: sortOrder,
        },

        include: {
          product: {
            select: {
              id: true,
              name: true,
              slug: true,
            },
          },

          deal: {
            select: {
              id: true,
              title: true,
              slug: true,
            },
          },
        },
      }),

      prisma.coupon.count({
        where,
      }),
    ]);

    return {
      data: coupons,

      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}