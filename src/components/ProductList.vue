<template>
    <div>
        <ul>
            <li v-for="(item) in productList" :key="item.id">
                {{item.name}} -- {{item.price}}
                <br>
                <button @click="addShop(item)" :disabled="item.state">加入购物车</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    export default {
        data(){
            return{
                
            }
        },
        computed:{
            ...mapState({
                productList(state){
                    return state.productList.productList
                }
            })
           
        },
        methods:{
            ...mapMutations({
                addShop: 'cart/addCart'
            }),
        },
        mounted(){
            
        }
    }
</script>

<style lang="scss" scoped>

</style>