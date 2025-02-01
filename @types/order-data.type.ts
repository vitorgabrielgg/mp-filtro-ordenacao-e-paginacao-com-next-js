import { LinkType } from "./link.type";
import { OrderType } from "./order.type";

export interface IOrderData {
  data: OrderType[];
  meta: {
    links: LinkType[];
  };
}
