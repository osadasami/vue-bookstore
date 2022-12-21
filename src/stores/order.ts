import type Book from "@/types/Book";
import type OrderItem from "@/types/OrderItem";
import { defineStore } from "pinia";
import { computed, ref, type Ref } from "vue";

const useOrderStore = defineStore("order", () => {
  const items: Ref<{ [key: number]: OrderItem }> = ref({});

  const total = computed(() => {
    return toFixed(
      Object.values(items.value).reduce(
        (sum: number, item: OrderItem) => sum + item.total,
        0
      ),
      2
    );
  });

  const count = computed(() => {
    return Object.values(items.value).reduce(
      (sum: number, item: OrderItem) => sum + item.count,
      0
    );
  });

  const add = (item: Book) => {
    if (items.value[item.id]) {
      const itemInOrder = items.value[item.id];
      itemInOrder.count += 1;
      itemInOrder.total = toFixed(
        itemInOrder.count * itemInOrder.item.price,
        2
      );
    } else {
      items.value[item.id] = { count: 1, total: item.price, item };
    }
  };

  const inc = (orderItem: OrderItem) => {
    items.value[orderItem.item.id].count += 1;
    items.value[orderItem.item.id].total = toFixed(
      orderItem.item.price * orderItem.count,
      2
    );
  };

  const dec = (orderItem: OrderItem) => {
    const itemInOrder = items.value[orderItem.item.id];

    if (itemInOrder.count > 1) {
      itemInOrder.count -= 1;
      items.value[orderItem.item.id].total = toFixed(
        orderItem.item.price * orderItem.count,
        2
      );
    }
  };

  const remove = (item: OrderItem) => {
    delete items.value[item.item.id];
  };

  const toFixed = (n: number, f: number) => parseFloat(n.toFixed(f));

  return { items, total, count, add, inc, dec, remove };
});

export default useOrderStore;
