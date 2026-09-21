import { Category } from "@prisma/client";

export class CategoryMapper {
  static toResponse(category: Category) {
    return {
      id: category.id,
      name: category.name,
      slug: category.slug,
      description: category.description,
      icon: category.icon,
      priority: category.priority,
      status: category.status,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
    };
  }

  static toResponseList(categories: Category[]) {
    return categories.map((category) =>
      CategoryMapper.toResponse(category),
    );
  }
}