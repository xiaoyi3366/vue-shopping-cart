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
                return this.$store.productList.state.productList
            }
        },
        methods:{
            addShop(index){

            }
        },
        mounted(){
            // console.log(this.$store.state.productList)
            this.productList=this.$store.productList.state.productList
            // console.log(this.productList)
        }
    }
</script>

<style lang="scss" scoped>

</style>