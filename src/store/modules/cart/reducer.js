import produce from 'immer';

export default function cart(state = [], action) {
  // action e a acao do dispatch
  // state e o estado anterior ao dispatch
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;

        draft.push(product);
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    // case = faz o return quando addtocart for ouvido

    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }

    default:
      return state;
    // caso o dispatch nao tenh o addtocart, ele retorna o estado atual
  }
}
// cart e um reducer
