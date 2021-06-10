import {ProductsDto} from "../product/products-dto";
import {UserDto} from "../user/user-dto";

export class OrdersDto {
  public orderDate: string | undefined
  public orderId: number | undefined
  public products: Array<ProductsDto> | undefined
  public status: string | undefined
  public user: UserDto | undefined
}
