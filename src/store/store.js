import { configureStore } from '@reduxjs/toolkit'
import Shop from './redusers/Shop'


export default configureStore({
  reducer: {
    Shop: Shop,
},
})