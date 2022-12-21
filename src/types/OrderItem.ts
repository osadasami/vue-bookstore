import type Book from "./Book";

type OrderItem = {
  item: Book;
  count: number;
  total: number;
};

export default OrderItem;
