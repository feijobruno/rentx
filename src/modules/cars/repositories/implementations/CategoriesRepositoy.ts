import { getRepository, Repository } from 'typeorm';
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";
import { categoriesRoutes } from "../../../../routes/categories.routes";
import { Category } from "../../entities/Category";


class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>; 
 
    constructor() {
      this.repository = getRepository(Category);
    }
  
    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
      const category = this.repository.create({ name, description });
  
      await this.repository.save(category);
    }
  
    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }
  
    async findByName(name: string): Promise<Category> {
      // SELECT * from categories where name = "name" limit 1
      const category = await this.repository.findOne({ where: { name } });
  
      return category;
    }
  }
  
  export { CategoriesRepository };