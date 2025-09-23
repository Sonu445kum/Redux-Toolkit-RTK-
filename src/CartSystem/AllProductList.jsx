// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchProducts } from "./ProductSlice";
// import { addToCart } from "./CartSlice";
// import "./AllProductList.css"; // Import the CSS file

// export default function AllProductsList() {
//   const { items, status } = useSelector((state) => state.products);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchProducts());
//     }
//   }, [status, dispatch]);

//   return (
//     <div className="products-container">
//       <h2 className="products-title">Our Products</h2>

//       {status === "loading" && <p className="status-msg">Loading...</p>}
//       {status === "failed" && <p className="status-msg error">Error fetching products</p>}

//       <div className="products-grid">
//         {Array.isArray(items) &&
//           items.map((p) => (
//             <div key={p.id} className="product-card">
//               <img src={p.image} alt={p.title} className="product-image" />
//               <h3 className="product-title">{p.title}</h3>
//               <p className="product-price">₹{p.price}</p>
//               <p>{p.rating.rate}</p>
//               <button
//                 className="add-btn"
//                 onClick={() => dispatch(addToCart(p))}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import "./AllProductList.css"; // CSS file
import { productsData } from "./ProductsData"; // local data

export default function AllProductsList() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart); // optional if you want cart info

  return (
    <div className="products-container">
      <h2 className="products-title">Our Products</h2>

      <div className="products-grid">
        {Array.isArray(productsData) &&
          productsData.map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.image} alt={p.title} className="product-image" />
              <h3 className="product-title">{p.title}</h3>
              <p className="product-price">₹{p.price}</p>
              {p.rating && <p>Rating: {p.rating.rate}</p>}
              <button
                className="add-btn"
                onClick={() => dispatch(addToCart(p))}
              >
                Add to Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
