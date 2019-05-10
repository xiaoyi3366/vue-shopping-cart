<template>
  <div id="app">
    <h2>购物车</h2>
    <p>用户名：{{$store.state.userInfo.email}}</p>
    <hr>
    <h3>产品</h3>
    <ProductList/>
    <hr>
    <h3>清单</h3>
    <Cart/>

  </div>
</template>

<script>
import store from './vuex/index.js'
import ProductList from './components/ProductList.vue'
import Cart from './components/Cart.vue'
export default {
  name: 'app',
  components: {
    ProductList,
    Cart,
  },
  store,
}
</script>

<style>

</style>
