import { Product } from "./../interfaces/product.interface";
import { ProductRepository } from "./product-repository.interface";
import { nanoid } from "nanoid";

export class ProductMockRepository implements ProductRepository {
  private products: Array<Product> = [
    {
      id: "_RcZo",
      name: "chuj",
      price: "123",
      count: "123",
      createdAt: new Date("2022-03-14T16:21:47.506Z"),
      updatedAt: new Date("2022-03-14T16:21:47.506Z"),
    },
    {
      id: "kSemi",
      name: "chuj",
      price: "123",
      count: "123",
      createdAt: new Date("2022-03-14T16:21:48.073Z"),
      updatedAt: new Date("2022-03-14T16:21:48.073Z"),
    },
  ];

  addItem(item: Product): Product {
    item.id = nanoid(5);
    item.createdAt = new Date();
    item.updatedAt = new Date();
    this.products.push(item);
    return item;
  }

  updateItem(id: string, item: Product): Product {
    this.products = this.products.map((i) => {
      if (i.id === id) {
        return {
          ...item,
          id: i.id,
          createdAt: i.createdAt,
          updatedAt: i.updatedAt,
        };
      }
      return i;
    });
    return this.getItemById(id);
  }

  findProductByName(name: string): Product {
    console.log(name);

    let elem;
    this.products.forEach((i) => {
      if (i.name === name) elem = i;
    });
    if (elem) return elem;
    return null;
  }
  getAllItems(): Product[] {
    return this.products;
  }

  getItemById(id: string): Product {
    let elem;
    this.products.forEach((i) => {
      if (i.id == id) elem = i;
    });
    if (elem) return elem;
    return null;
  }
  deleteItem(id: string): boolean {
    const newArr = this.products.filter((x) => {
      return x.id !== id;
    });

    if (newArr.length === this.products.length - 1) {
      this.products = newArr;
      return true;
    }
    return false;
  }

  validateBeforeSave(item: Product): boolean {
    return true;
  }
}
