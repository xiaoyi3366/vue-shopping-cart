import Vue from 'vue';
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
    total:0,
}
const mutations={}
export default {
    namespaced:true,
    state,
    mutations,
}