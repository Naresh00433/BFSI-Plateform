import { ClickEntityType } from "@prisma/client";

import { CreateClickEventDto } from "../dto/create-click-event.dto";
import { ClickEventRepository } from "../repositories/click-event.repository";
import { ClickEventFilter } from "../types/click-event.type";

export class ClickEventService {
  private readonly repository = new ClickEventRepository();

  async create(data: CreateClickEventDto) {
    return this.repository.create(data);
  }

  async findAll(filter: ClickEventFilter) {
    return this.repository.findAll(filter);
  }

  async findById(id: string) {
    return this.repository.findById(id);
  }

  async countByEntity(
    entityType: ClickEntityType,
    entityId: string
  ) {
    return this.repository.countByEntity(
      entityType,
      entityId
    );
  }
}