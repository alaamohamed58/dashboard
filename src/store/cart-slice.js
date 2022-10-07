import { createSlice } from "@reduxjs/toolkit";

let storedCart = localStorage.getItem("cart");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    farm: {},
    model: {},
    plan: {},
    cartItems: storedCart ? JSON.parse(storedCart) : [],
  },
  reducers: {
    addFarm: (state, action) => {
      state.farm.title = action.payload.title;
      state.farm.setupFee = action.payload.fee;
      state.farm.location = action.payload.location;
    },

    addModel: (state, action) => {
      state.model.model = action.payload.model;
      state.model.price = action.payload.price;
      state.model.image = action.payload.image;
      state.model.quantity = action.payload.quantity;
      state.model.warrently = action.payload.warrently;
    },
    addPlan: (state, action) => {
      state.plan.plan = action.payload.plan;
      state.plan.power = action.payload.power;
    },

    addCartItems: (state) => {
      const properties = Object.assign(state.farm, state.model, state.plan, {
        id: Math.random(),
      });
      state.cartItems.push(properties);

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    removeItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
