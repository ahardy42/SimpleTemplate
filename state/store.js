import { configureStore } from '@reduxjs/toolkit'
import { defaultSlice } from './slices'

export default configureStore({
    reducer: {
        default: defaultSlice
    }
})