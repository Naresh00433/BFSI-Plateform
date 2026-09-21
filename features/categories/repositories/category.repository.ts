import { prisma } from "@/lib/prisma/client";
import { Category, CategoryStatus, Prisma } from "@prisma/client";
import { CreateCategoryDto } from "../dto/create-category.dto";
import { CategoryFilter } from "../types/category-filter.type";

export class CategoryRepository {
  async findBySlug(slug: string): Promise<Category | null> {
    return prisma.category.findUnique({
      where: {
        slug,
      },
    });
  }

  async create(data: CreateCategoryDto): Promise<Category> {
    return prisma.category.create({
      data,
    });
  }

  async findById(id: string) {
    return prisma.category.findFirst({
      where: {
        id,
        deletedAt: null,
      },
    });
  }

  async update(id: string, data: Prisma.CategoryUpdateInput) {
    return prisma.category.update({
      where: {
        id,
      },
      data,
    });
  }

  async updateStatus(id: string, status: CategoryStatus) {
    return prisma.category.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
  }

  async softDelete(id: string) {
    return prisma.category.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  async findAll(filter: CategoryFilter) {
    const {
      page = 1,
      limit = 10,
      search,
      status,
      sortBy = "priority",
      sortOrder = "asc",
    } = filter;

    const where: Prisma.CategoryWhereInput = {
      deletedAt: null,
    };

    if (search) {
      where.name = {
        contains: search,
        mode: "insensitive",
      };
    }

    if (status) {
      where.status = status;
    }

    const [categories, total] = await prisma.$transaction([
      prisma.category.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: {
          [sortBy]: sortOrder,
        },
      }),

      prisma.category.count({
        where,
      }),
    ]);

    return {
      data: categories,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}