export interface CreateCategoryDto {
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  priority: number;
}