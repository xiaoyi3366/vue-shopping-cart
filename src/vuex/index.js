import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
import productList from './productList'
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