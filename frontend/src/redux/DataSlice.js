import { createSlice } from '@reduxjs/toolkit'

const dataSlice = createSlice({
    name: "data",
    initialState: {
        data: [],
        cartData: []
    }, reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },
        addToCart: (state, action) => {
            const product = action.payload;
            const existing = state.cartData.find(item => item.id === product.id);
            if (!existing) {
                state.cartData.push({ ...product, quantity: 1 });
            }
        },
        increaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.cartData.find(i => i.id === id);
            if (item) {
                item.quantity = (item.quantity || 1) + 1;
            }
        }, decreaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.cartData.find(i => i.id === id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else if (item) {
                state.cartData = state.cartData.filter(i => i.id !== id);
            }
        },
    }
})

export const { setData, addToCart, increaseQuantity, decreaseQuantity } = dataSlice.actions;
export default dataSlice.reducer;
