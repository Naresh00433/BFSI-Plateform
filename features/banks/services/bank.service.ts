import { ConflictError, NotFoundError } from "@/lib/errors";
import { BankStatus } from "@prisma/client";
import { CreateBankDto } from "../dto/create-bank.dto";
import { BankFilter } from "../types/bank-filter.type";
import { BankMapper } from "../utils/bank.mapper";
import { BankRepository } from "../repositories/bank.repository";
import { UpdateBankDto } from "../dto/update-bank.dto";

export class BankService {
  private readonly repository = new BankRepository();

  async create(data: CreateBankDto) {
    const exists = await this.repository.findBySlug(data.slug);

    if (exists) {
      throw new ConflictError("Bank already exists.");
    }

    const bank = await this.repository.create(data);

    return BankMapper.toResponse(bank);
  }

  async findAll(filter: BankFilter) {
    const result = await this.repository.findAll(filter);

    return {
      data: BankMapper.toResponseList(result.data),
      meta: result.meta,
    };
  }

  async findById(id: string) {
    const bank = await this.repository.findById(id);

    if (!bank) {
      throw new NotFoundError("Bank not found.");
    }

    return BankMapper.toResponse(bank);
  }

  async update(id: string, data: UpdateBankDto) {
    const bank = await this.repository.findById(id);

    if (!bank) {
      throw new NotFoundError("Bank not found.");
    }

    const duplicate = await this.repository.findBySlug(data.slug);

    if (duplicate && duplicate.id !== id) {
      throw new ConflictError("Slug already exists.");
    }

    const updated = await this.repository.update(id, data);

    return BankMapper.toResponse(updated);
  }

  async delete(id: string) {
    const bank = await this.repository.findById(id);

    if (!bank) {
      throw new NotFoundError("Bank not found.");
    }

    await this.repository.softDelete(id);

    return {
      message: "Bank deleted successfully.",
    };
  }

  async updateStatus(id: string, status: BankStatus) {
    const bank = await this.repository.findById(id);

    if (!bank) {
      throw new NotFoundError("Bank not found.");
    }

    const updated = await this.repository.updateStatus(id, status);

    return BankMapper.toResponse(updated);
  }
}
