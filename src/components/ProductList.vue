<template>
    <div>
        <ul>
            <li v-for="(item,index) in productList" :key="item.id">
                {{item.name}} -- {{item.price}}
                <br>
                <button @click="addShop(index)" :disabled="item.state">加入购物车</button>
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
            addShop(index){

            }
        },
        mounted(){
            
        }
    }
</script>

<style lang="scss" scoped>

</style>