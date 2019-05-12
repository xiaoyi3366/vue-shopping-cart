<template>
    <div>
        <ul>
            <li v-for="(item) in cartList" :key="item.id">
                {{item.name}} -- {{item.price}} x {{item.number}}
            </li>
        </ul>
        <p>合计：{{total}}</p>
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
                return this.$store.state.cart.all
            },
            total(){
                return this.$store.state.cart.total;
            }
        },
        mounted(){
            console.log(this.$store.state.cart.all)
        }
    }
</script>

<style lang="scss" scoped>

</style>