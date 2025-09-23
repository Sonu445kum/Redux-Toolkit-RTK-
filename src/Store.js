import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Redux/CounterSlice";
import cartReducer from "./CartSystem/CartSlice";
import productsReducer from "./CartSystem/ProductSlice"; 
import todosReducer from "./TodoApp/TodoSlice";
import authReducer from "./Authentications/AuthenticationsSlice";
import { apiSlice } from "./RTKQuery/ApiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    products: productsReducer, 
    todos: todosReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), //  correct
});
