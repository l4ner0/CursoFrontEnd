<template>
  <div id="app" class="mt-5">
    <ShopLayout>
      <template slot="product-list">
        <ProductList></ProductList>
      </template>
      <template slot="cart">
          <Cart />
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
</style>
