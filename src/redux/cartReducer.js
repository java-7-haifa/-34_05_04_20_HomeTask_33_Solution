const init = {
  products: [],
};

export default function cartReducer(state = init, action) {
    let arr;
    let index;
  switch (action.type) {
    case "ADD_PROD":
      arr = [...state.products];
      arr.push({ ...action.product, count: 1 });
      return { ...state, products: arr };
    case "INC_PROD":
      arr = [...state.products];
      index = arr.findIndex((p) => p.id === action.pid);
      arr[index] = { ...arr[index], count: arr[index].count + 1 };
      return { ...state, products: arr };
    case "DEC_PROD":
      arr = [...state.products];
      index = arr.findIndex((p) => p.id === action.pid);
      if (arr[index].count === 1) {
        arr.splice(index, 1);
      } else {
        arr[index] = { ...arr[index], count: arr[index].count - 1 };
      }
      return { ...state, products: arr };
    default:
      return state;
  }
}
