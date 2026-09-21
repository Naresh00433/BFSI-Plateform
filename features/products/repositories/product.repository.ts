import { prisma } from "@/lib/prisma/client";
import { Prisma, Product, ProductStatus } from "@prisma/client";

import { CreateProductDto } from "../dto/create-product.dto";
import { ProductFilter } from "../types/product-filter.type";

export class ProductRepository {
  async findBySlug(slug: string): Promise<Product | null> {
    return prisma.product.findFirst({
      where: {
        slug,
        deletedAt: null,
      },
    });
  }

  async create(data: CreateProductDto): Promise<Product> {
    return prisma.product.create({
      data,
    });
  }

  async findById(id: string) {
    return prisma.product.findFirst({
      where: {
        id,
        deletedAt: null,
      },
      include: {
        bank: true,
        category: true,
        faqs: {
          orderBy: {
            sortOrder: "asc",
          },
        },
        documents: true,
      },
    });
  }

  async update(id: string, data: Prisma.ProductUpdateInput) {
    return prisma.product.update({
      where: {
        id,
      },
      data,
    });
  }

  async updateStatus(id: string, status: ProductStatus) {
    return prisma.product.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
  }

  async softDelete(id: string) {
    return prisma.product.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  async findAll(filter: ProductFilter) {
    const {
      page = 1,
      limit = 10,
      search,
      bankId,
      categoryId,
      status,
      featured,
      sortBy = "priority",
      sortOrder = "asc",
    } = filter;

    const where: Prisma.ProductWhereInput = {
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
          shortDescription: {
            contains: search,
            mode: "insensitive",
          },
        },
      ];
    }

    if (bankId) {
      where.bankId = bankId;
    }

    if (categoryId) {
      where.categoryId = categoryId;
    }

    if (status) {
      where.status = status;
    }

    if (featured !== undefined) {
      where.featured = featured;
    }

    const [products, total] = await prisma.$transaction([
      prisma.product.findMany({
        where,
        include: {
          bank: true,
          category: true,
        },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: {
          [sortBy]: sortOrder,
        },
      }),

      prisma.product.count({
        where,
      }),
    ]);

    return {
      data: products,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}