import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload)
        },
        deleteItems: (state, action) => {
            const itemId = action.payload
            state.items = state.items.filter((item) => item.card.info.id !== itemId)
        },
        clearCart: (state, action) => {
            state.items = []
        }
    }

})

export default cartSlice.reducer;
export const { addItems, deleteItems, clearCart } = cartSlice.actions