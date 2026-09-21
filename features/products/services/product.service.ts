import { ConflictError, NotFoundError } from "@/lib/errors";
import { ProductStatus } from "@prisma/client";

import { CreateProductDto } from "../dto/create-product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";
import { ProductFilter } from "../types/product-filter.type";
import { ProductMapper } from "../utils/product.mapper";
import { ProductRepository } from "../repositories/product.repository";

export class ProductService {
  private readonly repository = new ProductRepository();

  async create(data: CreateProductDto) {
    const exists = await this.repository.findBySlug(data.slug);

    if (exists) {
      throw new ConflictError("Product already exists.");
    }

    const product = await this.repository.create(data);

    return ProductMapper.toResponse(product);
  }

  async findAll(filter: ProductFilter) {
    const result = await this.repository.findAll(filter);

    return {
      data: ProductMapper.toResponseList(result.data),
      meta: result.meta,
    };
  }

  async findById(id: string) {
    const product = await this.repository.findById(id);

    if (!product) {
      throw new NotFoundError("Product not found.");
    }

    return product;
  }

  async update(id: string, data: UpdateProductDto) {
    const product = await this.repository.findById(id);

    if (!product) {
      throw new NotFoundError("Product not found.");
    }

    if (data.slug) {
      const duplicate = await this.repository.findBySlug(data.slug);

      if (duplicate && duplicate.id !== id) {
        throw new ConflictError("Slug already exists.");
      }
    }

    const updated = await this.repository.update(id, data);

    return ProductMapper.toResponse(updated);
  }

  async delete(id: string) {
    const product = await this.repository.findById(id);

    if (!product) {
      throw new NotFoundError("Product not found.");
    }

    await this.repository.softDelete(id);

    return {
      message: "Product deleted successfully.",
    };
  }

  async updateStatus(id: string, status: ProductStatus) {
    const product = await this.repository.findById(id);

    if (!product) {
      throw new NotFoundError("Product not found.");
    }

    const updated = await this.repository.updateStatus(id, status);

    return ProductMapper.toResponse(updated);
  }
}