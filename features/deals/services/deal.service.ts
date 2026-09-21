import { ConflictError, NotFoundError } from "@/lib/errors";
import { DealStatus } from "@prisma/client";

import { CreateDealDto } from "../dto/create-deal.dto";
import { UpdateDealDto } from "../dto/update-deal.dto";
import { DealFilter } from "../types/deal-filter.type";
import { DealMapper } from "../utils/deal.mapper";
import { DealRepository } from "../repositories/deal.repository";

export class DealService {
  private readonly repository = new DealRepository();

  async create(data: CreateDealDto) {
    const exists = await this.repository.findBySlug(data.slug);

    if (exists) {
      throw new ConflictError("Deal already exists.");
    }

    const deal = await this.repository.create(data);

    return DealMapper.toResponse(deal);
  }

  async findAll(filter: DealFilter) {
    const result = await this.repository.findAll(filter);

    return {
      data: DealMapper.toResponseList(result.data),
      meta: result.meta,
    };
  }

  async findById(id: string) {
    const deal = await this.repository.findById(id);

    if (!deal) {
      throw new NotFoundError("Deal not found.");
    }

    return deal;
  }

  async update(id: string, data: UpdateDealDto) {
    const deal = await this.repository.findById(id);

    if (!deal) {
      throw new NotFoundError("Deal not found.");
    }

    if (data.slug) {
      const duplicate = await this.repository.findBySlug(data.slug);

      if (duplicate && duplicate.id !== id) {
        throw new ConflictError("Slug already exists.");
      }
    }

    const updated = await this.repository.update(id, data);

    return DealMapper.toResponse(updated);
  }

  async delete(id: string) {
    const deal = await this.repository.findById(id);

    if (!deal) {
      throw new NotFoundError("Deal not found.");
    }

    await this.repository.softDelete(id);

    return {
      message: "Deal deleted successfully.",
    };
  }

  async updateStatus(id: string, status: DealStatus) {
    const deal = await this.repository.findById(id);

    if (!deal) {
      throw new NotFoundError("Deal not found.");
    }

    const updated = await this.repository.updateStatus(id, status);

    return DealMapper.toResponse(updated);
  }
}