const app = Vue.createApp({
    data(){
        return{
            cart:[],
            premium: false
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        },
        removeById(id){
            this.cart.pop(id)
        }
    }  
     
})
