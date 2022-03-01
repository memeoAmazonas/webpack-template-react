import { configureStore } from "@reduxjs/toolkit";
import language from './slice/language'
export default configureStore({
    reducer: {
        language,
    }
})
