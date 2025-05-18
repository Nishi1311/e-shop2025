import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cart:[],
    totalQuantity:0,
    totalPrice:0
}

export const CartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const newItemToCart=action.payload
            const getItemIndex=state.cart.find((ele)=>ele.id===newItemToCart.id)
            if(getItemIndex){
getItemIndex.quantity=getItemIndex.quantity+1,
getItemIndex.price=getItemIndex.price + newItemToCart.price
            }
            else{
              state.cart.push({
                id: newItemToCart.id,
    title:newItemToCart.title,
    image:newItemToCart.image,
    price:newItemToCart.price,
    unitPrice: newItemToCart.price,
   quantity:1
              })  
            }
            state.totalQuantity++;
            state.totalPrice=state.totalPrice+newItemToCart.price

        },
        removeFromCart:(state,action)=>{
            const id=action.payload
            const getItem=state.cart.find((ele)=>ele.id===id)
            if(getItem){
          state.totalPrice=state.totalPrice-getItem.totalPrice
          state.totalQuantity=state.totalQuantity-getItem.quantity
            }
        state.cart=state.cart.filter((ele)=>ele.id!=id)
        },
        incrementByOne:(state,action)=>{
            const id=action.payload
            const getItem=state.cart.find((ele)=>ele.id===id)
if(getItem){
    getItem.quantity=getItem.quantity+1
    getItem.price= getItem.unitPrice*getItem.quantity
    state.totalPrice=state.totalPrice+getItem.unitPrice
    state.totalQuantity=state.totalQuantity+1;
}
        },
        decrementByOne:(state,action)=>{
            const id=action.payload
            const getItem=state.cart.find((ele)=>ele.id===id)
if(getItem && getItem.quantity > 1){
    getItem.quantity=getItem.quantity-1
    getItem.price=getItem.unitPrice*getItem.quantity
    state.totalPrice=state.totalPrice-getItem.unitPrice
    state.totalQuantity=state.totalQuantity-1;
}
        }
    }
})
export const {addToCart,removeFromCart,incrementByOne,decrementByOne}=CartSlice.actions;
export default CartSlice.reducer;