import {ProductsDto} from "../product/products-dto";
import {UserDto} from "../user/user-dto";

/** Stworzone przez Michał Deja  */

export class OrderDto {
  public orderDate!: string
  public orderId!: number
  public products!: ProductsDto
  public status!: string
  public user!: UserDto
}
