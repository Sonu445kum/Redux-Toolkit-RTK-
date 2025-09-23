// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { productsData } from "./ProductsData";
// // Fetch products from API
// export const fetchProducts = createAsyncThunk(
//   "products/fetch",
//   async () => {
//     try {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();
//       return Array.isArray(data) ? data : [];
//     } catch (error) {
//       console.error("Failed to fetch products:", error);
//       return [];
//     }
//   }
// );

// // Dummy Products (for offline testing)
// // const dummyProducts = [
// //   { id: 1, title: "Laptop", price: 50000 },
// //   { id: 2, title: "Phone", price: 20000 },
// //   { id: 3, title: "Headphones", price: 3000 },
// // ];

// const productsSlice = createSlice({
//   name: "products",
//   initialState: {
//     items: productsData, //  always an array
//     status: "idle",
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         // ensure items is always an array
//         state.items = Array.isArray(action.payload) ? action.payload : [];
//         console.log("Products loaded:", state.items); // debug
//       })
//       .addCase(fetchProducts.rejected, (state) => {
//         state.status = "failed";
//         state.items = []; // fallback to empty array
//         console.error("Failed to fetch products");
//       });
//   },
// });

// export default productsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "./ProductsData"; // tumhara local file

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: productsData, // directly use local data
  },
  reducers: {
    // agar future me add/update product karna ho
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;

