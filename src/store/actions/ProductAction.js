import { ActionTypes } from "../constants/Actiontypes";

export const setProducts = (products) =>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload : products,
    };
}

// export const loadProducts = (products) =>{
//   return {
//       type: ActionTypes.LOAD_PRODUCTS,
//       payload : products,
//   };
// }

export const setuProducts = (products) =>{
  return {
      type: ActionTypes.SET_UPRODUCTS,
      payload : products,
  };
}

export const setCategories = (categories) =>{
  return {
      type: ActionTypes.SET_CATEGORIES,
      payload : categories,
  };
}

export const selectedProduct = (product) => {
    return {
      type: ActionTypes.SELECTED_PRODUCT,
      payload: product,
    };
  };