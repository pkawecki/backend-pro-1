import { ProductRepository } from "./../repositories/product-repository.interface";
import BaseController from "./base-controller";
import { Product } from "../interfaces/product.interface";

export class ProductsController extends BaseController<Product> {
  constructor(private productsRepository: ProductRepository) {
    super(productsRepository);
  }

  findProductByName(name: string): Product {
    return this.productsRepository.findProductByName(name);
  }
}
