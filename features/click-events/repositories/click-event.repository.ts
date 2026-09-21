import { prisma } from "@/lib/prisma/client";
import { ClickEntityType, Prisma } from "@prisma/client";

import { CreateClickEventDto } from "../dto/create-click-event.dto";
import { ClickEventFilter } from "../types/click-event.type";

export class ClickEventRepository {
  async create(data: CreateClickEventDto) {
    return prisma.clickEvent.create({
      data: {
        entityType: data.entityType,
        entityId: data.entityId,
        userId: data.userId,
        ipAddress: data.ipAddress,
        userAgent: data.userAgent,
      },
    });
  }

  async findById(id: string) {
    return prisma.clickEvent.findUnique({
      where: {
        id,
      },
    });
  }

  async findAll(filter: ClickEventFilter) {
    const {
      page = 1,
      limit = 20,
      entityType,
      entityId,
      userId,
      sortOrder = "desc",
    } = filter;

    const where: Prisma.ClickEventWhereInput = {};

    if (entityType) {
      where.entityType = entityType;
    }

    if (entityId) {
      where.entityId = entityId;
    }

    if (userId) {
      where.userId = userId;
    }

    const [clickEvents, total] = await prisma.$transaction([
      prisma.clickEvent.findMany({
        where,

        skip: (page - 1) * limit,

        take: limit,

        orderBy: {
          createdAt: sortOrder,
        },
      }),

      prisma.clickEvent.count({
        where,
      }),
    ]);

    return {
      data: clickEvents,

      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async countByEntity(
    entityType: ClickEntityType,
    entityId: string
  ) {
    return prisma.clickEvent.count({
      where: {
        entityType,
        entityId,
      },
    });
  }
}