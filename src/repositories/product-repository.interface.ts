import { BaseRepository } from "./base-repository.interface";
import { Product } from "../interfaces/product.interface";

export interface ProductRepository extends BaseRepository<Product> {
  findProductByName(name: string): Product;
}
