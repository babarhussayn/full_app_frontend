import { configureStore, createSlice } from "@reduxjs/toolkit";



const User={
    id:'',
    name:'',
    email:''

}

const initialCartItem={
    id:'',image:'',price:'',quantity:'',name:''
}

const initialState={
    user:User,
    cart:[],
}

const appSlice=createSlice({
    name:'app',
    initialState,
    reducers:{
        
        setUser:(state,action)=>{
            state.user=action.payload
        },
        addToCart: (state, action) => {
            const newItem = { ...initialCartItem, ...action.payload };
            state.cart.push(newItem); 
          },

    }

})
export const { setUser,addToCart} = appSlice.actions;











export const store=configureStore({
reducer:{
    app:appSlice.reducer
}
});
