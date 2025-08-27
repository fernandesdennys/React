export function userReducer(state, action) {
  switch (action.type) {
    case 'RandonloginAndNumber':
      return { ...state, number: state.number + action.payload };
    default:
      return state;
  }
}