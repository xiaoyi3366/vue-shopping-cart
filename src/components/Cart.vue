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
    import { mapState } from 'vuex'
    export default {
        data(){
            return{
                
            }
        },
        computed: {
            ...mapState({
                cartList(state){
                    return state.cart.all
                },
                total(state){
                    return state.cart.total;
                }
            })
            
        },
        mounted(){
            
        }
    }
</script>

<style lang="scss" scoped>

</style>