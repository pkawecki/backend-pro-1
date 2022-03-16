import { nanoid } from "nanoid";
import { User, UserAddress } from "../interfaces/user.interface";
import { UserRepository } from "./user-repository.interface";
import { Role } from "../enums/roles.enum";

export class UserMockRepository implements UserRepository {
  private address1: UserAddress = {
    country: "Poland",
    city: "Debica",
    street: "Street1",
    street_address: "1",
    apt_address: "apt1",
  };
  private address2: UserAddress = {
    country: "Poland",
    city: "Debica2",
    street: "Street2",
    street_address: "2",
    apt_address: "apt2",
  };

  private users: Array<User> = [
    {
      id: "_RcZo",
      name: "UserName 1",
      surname: "UserSurname 1",
      email: "UserEmail 1",
      birthDate: new Date("2022-03-14T16:21:47.506Z"),
      address: this.address1,
      role: Role.ADMIN,
    },
    {
      id: "kSemi",
      name: "UserName 2",
      surname: "UserSurname 2",
      email: "UserEmail 2",
      birthDate: new Date("2022-03-14T16:21:47.506Z"),
      address: this.address2,
      role: Role.CUSTOMER,
    },
  ];

  addItem(item: User): User {
    if (this.validateBeforeSave(item)) {
      item.id = nanoid(5);
      this.users.push(item);
      return item;
    }
    return item;
  }

  validateBeforeSave(item: User): boolean {
    const itemWork = item;
    let k: keyof typeof itemWork;
    for (k in itemWork) {
      console.log(`${k}: ${itemWork[k]} `);
    }
    return true;
  }

  updateItem(id: string, item: User): User {
    this.users = this.users.map((i) => {
      if (i.id === id) {
        return {
          id: i.id,
          ...item,
        };
      }
      return i;
    });
    return this.getItemById(id);
  }
  findUserByName(name: string): User {
    console.log(name);

    let elem;
    this.users.forEach((i) => {
      if (i.name === name) elem = i;
    });
    if (elem) return elem;
    return null;
  }
  getAllItems(): User[] {
    return this.users;
  }
  getItemById(id: string): User {
    let elem;
    this.users.forEach((i) => {
      if (i.id == id) elem = i;
    });
    if (elem) return elem;
    return null;
  }
  deleteItem(id: string): boolean {
    const newArr = this.users.filter((x) => {
      return x.id != id;
    });
    console.log(newArr.length);
    console.log(this.users.length);

    if (newArr.length === this.users.length - 1) {
      this.users = newArr;
      return true;
    }
    return false;
  }
}
