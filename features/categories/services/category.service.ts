import { ConflictError, NotFoundError } from "@/lib/errors";
import { CategoryStatus } from "@prisma/client";

import { CreateCategoryDto } from "../dto/create-category.dto";
import { UpdateCategoryDto } from "../dto/update-category.dto";
import { CategoryFilter } from "../types/category-filter.type";
import { CategoryMapper } from "../utils/category.mapper";
import { CategoryRepository } from "../repositories/category.repository";

export class CategoryService {
  private readonly repository = new CategoryRepository();

  async create(data: CreateCategoryDto) {
    const exists = await this.repository.findBySlug(data.slug);

    if (exists) {
      throw new ConflictError("Category already exists.");
    }

    const category = await this.repository.create(data);

    return CategoryMapper.toResponse(category);
  }

  async findAll(filter: CategoryFilter) {
    const result = await this.repository.findAll(filter);

    return {
      data: CategoryMapper.toResponseList(result.data),
      meta: result.meta,
    };
  }

  async findById(id: string) {
    const category = await this.repository.findById(id);

    if (!category) {
      throw new NotFoundError("Category not found.");
    }

    return CategoryMapper.toResponse(category);
  }

  async update(id: string, data: UpdateCategoryDto) {
    const category = await this.repository.findById(id);

    if (!category) {
      throw new NotFoundError("Category not found.");
    }

    if (data.slug) {
      const duplicate = await this.repository.findBySlug(data.slug);

      if (duplicate && duplicate.id !== id) {
        throw new ConflictError("Slug already exists.");
      }
    }

    const updated = await this.repository.update(id, data);

    return CategoryMapper.toResponse(updated);
  }

  async delete(id: string) {
    const category = await this.repository.findById(id);

    if (!category) {
      throw new NotFoundError("Category not found.");
    }

    await this.repository.softDelete(id);

    return {
      message: "Category deleted successfully.",
    };
  }

  async updateStatus(id: string, status: CategoryStatus) {
    const category = await this.repository.findById(id);

    if (!category) {
      throw new NotFoundError("Category not found.");
    }

    const updated = await this.repository.updateStatus(id, status);

    return CategoryMapper.toResponse(updated);
  }
}