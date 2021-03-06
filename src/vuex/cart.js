import Vue from 'vue';
const state={
    all:[],
    total:0,
}
const mutations={
    addCart(state, item){
        console.log(item)
        let cartItemData;
        let index;
        for (let i = 0, len = state.all.length; i < len; i ++) {
            const cartItem = state.all[i] || {};
            if (cartItem.id === item.id) {
                cartItemData = cartItem;
                index = i;
                break;
            }
        }

        if (cartItemData) {
            Vue.set(state.all[index], 'number', (cartItemData.number + 1));
        } else {
            state.all.push({
                id:item.id,
                name:item.name,
                price:item.price,
                state:item.state,
                number: 1,
            })
        }
        console.log(state.all)
        let total_temp = 0;
        state.all.forEach(element => {
            
            total_temp += parseInt(element.price)*element.number
        });
        state.total = total_temp;
        console.log(state.total)
    },
    
}
export default {
    namespaced:true,
    state,
    mutations,
}