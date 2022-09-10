import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer,categoryReducer, uproductsReducer } from "./productsReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  uProducts:uproductsReducer,
  allCategories:categoryReducer,
  product: selectedProductsReducer,
});

export default reducers;