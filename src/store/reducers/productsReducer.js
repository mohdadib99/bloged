import { ActionTypes } from "../constants/Actiontypes";

const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      
      return { ...state, products: state.products.concat(payload) };
    case "RESET_PRODUCTS":
        state=intialState;
      return{...state,products:[]};
    default:
      return state;
  }
};

export const uproductsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_UPRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

const catinitial ={
  categories:[],
};

export const categoryReducer = (state = catinitial, { type, payload }) => {
 
  switch (type) {
    case ActionTypes.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        default:
            return state;
  }
};