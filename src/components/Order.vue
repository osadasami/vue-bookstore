<script setup lang="ts"></script>
<template>
  <div class="shopping-cart-table">
    <h2>Your Order</h2>
    <table class="table">
      <thead>
        <th>#</th>
        <th>Item</th>
        <th>Count</th>
        <th>Price</th>
        <th>Action</th>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>Site Reliability Engineering</td>
          <td>2</td>
          <td>$40</td>
          <td>
            <button class="btn btn-outline-danger btn-sm float-right">
              <i class="fa fa-trash-o" />
            </button>
            <button class="btn btn-outline-success btn-sm float-right">
              <i class="fa fa-plus-circle" />
            </button>
            <button class="btn btn-outline-warning btn-sm float-right">
              <i class="fa fa-minus-circle" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="total">Total: $201</div>
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
