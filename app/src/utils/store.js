import { create } from "zustand";

const initState = {
  serverUrl: "http://localhost:5000",
  categories: [],
  order: [
    { item: 1, quantity: 1 },
    { item: 2, quantity: 2 },
  ],
  // order: [],
};

export const store = create((set, get) => ({
  ...initState,

  setCategoriesData: (data) => set({ categories: data }),

  addOrder: (item) => {
    set((state) => {
      const existingItemIndex = state.order.findIndex(
        (orderItem) => orderItem.item === item.item
      );

      if (existingItemIndex !== -1) {
        const updatedOrder = [...state.order];
        updatedOrder[existingItemIndex].quantity += 1;
        return { order: updatedOrder };
      } else {
        return { order: [...state.order, { ...item, quantity: 1 }] };
      }
    });
  },
  getOrder: (item) => {
    const found = get().order.find((obj) => obj.item === item);
    return found || {};
  },
  updateOrder: (item, qty) =>
    set((state) => {
      const index = state.order.findIndex((obj) => obj.item === item);
      const newState = [...state.order];

      if (index !== -1) {
        if (qty > 0) {
          newState[index].quantity = qty;
        } else {
          newState.splice(index, 1);
        }
      }

      return { order: newState };
    }),
  reset: (state = initState) => set(state),
}));
