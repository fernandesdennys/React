export function numberReducer(state, action) {
  switch (action.type) {
    case 'addNumber_+2':
      return { ...state, number: state.number + 2 };
    case 'MultiplyBy_7':
      return { ...state, number: state.number * 7 };
    case 'divideFor_25':
      return { ...state, number: state.number / 25 };
    case 'Integer':
      return { ...state, number: parseInt(state.number, 10) };
    case 'login':
      return { ...state, user: { name: action.payload } };
    default:
      return state;
  }
}