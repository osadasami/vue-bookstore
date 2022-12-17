<script setup lang="ts">
const props = defineProps<{
  itemsCount: number;
  total: number;
}>();
</script>
<template>
  <header class="shop-header row">
    <a class="logo text-dark" href="#">Book Store</a>
    <a class="shopping-cart">
      <i className="cart-icon fa fa-shopping-cart" />
      {{ props.itemsCount }} items ({{ props.total }})
    </a>
  </header>
</template>
<style scoped>
.shop-header {
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
}

.shop-header .logo {
  font-family: Georgia, serif;
  font-size: 2.5rem;
  padding-left: 1rem;
}

.shop-header .shopping-cart {
  align-self: center;
  font-size: 1.3rem;
  padding-right: 1rem;
}

.shop-header .shopping-cart .cart-icon {
  font-size: 2.2rem;
  color: cadetblue;
  margin-right: 10px;
}
</style>
