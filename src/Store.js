import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Redux/CounterSlice";
import cartReducer from "./CartSystem/CartSlice";
import productsReducer from "./CartSystem/ProductSlice"; //  plural name
import todosReducer from "./TodoApp/TodoSlice";
import authReducer from "./Authentications/AuthenticationsSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    products: productsReducer, //  plural in store
    todos:todosReducer,
    auth:authReducer,
  },
});
