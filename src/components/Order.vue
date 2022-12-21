<script setup lang="ts">
import useOrderStore from "@/stores/order";

const orderStore = useOrderStore();
</script>
<template>
  <div class="shopping-cart-table">
    <h2>Your Order</h2>
    <table class="table">
      <thead>
        <th>#</th>
        <th>Item</th>
        <th>Count</th>
        <th>Price</th>
        <th>Total</th>
        <th>Action</th>
      </thead>

      <tbody>
        <tr v-for="orderItem in orderStore.items">
          <td>{{ orderItem.item.id }}</td>
          <td>{{ orderItem.item.title }}</td>
          <td>{{ orderItem.count }}</td>
          <td>{{ orderItem.item.price }}</td>
          <td>{{ orderItem.total }}</td>
          <td>
            <button
              @click="orderStore.remove(orderItem)"
              class="btn btn-outline-danger btn-sm float-right"
            >
              <i class="fa fa-trash-o" />
            </button>

            <button
              @click="orderStore.inc(orderItem)"
              class="btn btn-outline-success btn-sm float-right"
            >
              <i class="fa fa-plus-circle" />
            </button>

            <button
              @click="orderStore.dec(orderItem)"
              class="btn btn-outline-warning btn-sm float-right"
            >
              <i class="fa fa-minus-circle" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="total">Total: ${{ orderStore.total }}</div>
  </div>
</template>
<style scoped>
.shopping-cart-table {
  margin-top: 45px;
}

.shopping-cart-table .total {
  text-align: right;
  font-size: 1.3rem;
  margin-right: 10px;
}

.shopping-cart-table button {
  margin-left: 5px;
  margin-top: 5px;
}
</style>
