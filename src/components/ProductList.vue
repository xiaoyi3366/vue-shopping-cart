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
    export default {
        data(){
            return{
                
            }
        },
        computed:{
           productList(){
               return this.$store.state.productList.productList
           }
        },
        methods:{
            addShop(item){
                console.log(item)
                this.$store.commit('productList/addCart',item);
            }
        },
        mounted(){
            
        }
    }
</script>

<style lang="scss" scoped>

</style>