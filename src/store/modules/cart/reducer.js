export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return [...state, action.product];
    
    case '@cart/REMOVE':
      return state.filter(product => product.id !== action.id);
    
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      const draft = [...state];
      const productIndex = draft.findIndex(product => product.id === action.id);
      if (productIndex >= 0) {
        draft[productIndex].amount = Number(action.amount)
      };
      
      return draft;

    default:
      return state;
  };
};
