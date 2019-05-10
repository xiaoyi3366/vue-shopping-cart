<template>
    <div>
        <ul>
            <li v-for="(item) in cartList" :key="item.id">
                {{item.name}} -- {{item.price}} x {{item.number}}
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
        computed: {
            cartList(){
                return this.$store.state.productList.all
            }
        },
        mounted(){
            console.log(this.$store.state.productList.all)
        }
    }
</script>

<style lang="scss" scoped>

</style>