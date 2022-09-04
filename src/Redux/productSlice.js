import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "Product",
  initialState: [
    {
      id: 1,
      name: "Kutu",
      link: "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2Fc0cvo2QXFMX1wO7EpvQC?alt=media&token=7115b501-723c-4fd3-9c00-e709ad38bd8a",
      quantity: 1,
      size: "29mm",
      color: "#FF0000",
      total: 700.11,
    },
    {
      id: 2,
      name: "Kibal Batal",
      link: "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FcLGc3mcbZrK3Tl3yJ3xW?alt=media&token=44f74e92-f2ca-4af3-82f6-7a3bcace7f7a",
      quantity: 1,
      size: "28mm",
      color: "#000000",
      total: 674.02,
    },
  ],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      const newState = state.filter((item) => item.name !== action.payload);
      return newState;
    },
    toggleQuantityItem: (state, action) => {
      const start = action.payload.index;
      const item = action.payload.newObj;
      state[start] = item;
      return state;
    },
    removeAllProduct: (state, action) => {
      return (state = action.payload);
    },
  },
});
const { actions, reducer } = productSlice;
export const {
  addProduct,
  removeProduct,
  toggleQuantityItem,
  removeAllProduct,
} = actions;
export default reducer;
