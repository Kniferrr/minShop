import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  
}

export const Shop = createSlice({
  name: 'Shop',
  initialState,
  reducers: {
    ERROR: (state, action) => {
    state.error = action.payload;
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { ERROR} = Shop.actions

export default Shop.reducer