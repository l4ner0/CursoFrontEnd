<template>
  <div id="app" class="mt-5">
    <ShopLayout>
      <template slot="product-list">
        <ProductList></ProductList>
      </template>
      <template slot="cart">
        <Cart></Cart>
      </template>
    </ShopLayout>
  </div>
</template>

<script>

import ShopLayout from '@/components/ShopLayout'
import ProductList from '@/components/ProductList'
import Cart from '@/components/Cart'

export default {
  name: 'App',
  components: {
    ShopLayout,
    ProductList,
    Cart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
