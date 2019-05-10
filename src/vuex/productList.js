const state={
    productList:[
        {
            id:1,
            name:"华为 Mate 20",
            price:"3999",
            state:false

        },
        {
            id:2,
            name:"小米",
            price:"2999",
            state:true

        },
        {
            id:3,
            name:"OPPO R17",
            price:"3969",
            state:false

        }
    ],
    all:[],
}
const mutations={
    addCart(item){
        console.log(item)
        state.all.push({
            id:item.id,
            name:item.name,
            price:item.price,
            state:item.state
        })
        console.log(state.all)
    }
}
export default {
    namespaced:true,
    state,
    mutations,
}