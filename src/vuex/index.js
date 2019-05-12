import Vue from 'vue'
import Vuex from 'vuex'

import productList from './productList'
import cart from './cart'
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        userInfo:{
            email:'1326245718@qq.com'
        },
    },
    modules: {
        cart,
        productList
    },
})
export default store