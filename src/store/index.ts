import {configureStore} from "@reduxjs/toolkit";
import unsplashApi from "./rtk/unsplash";

const rootStore = configureStore({
    reducer: {
        [unsplashApi.reducerPath]: unsplashApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(unsplashApi.middleware),
});

export default rootStore;
