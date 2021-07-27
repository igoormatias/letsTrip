export default function reserve(state = [], action) {
    console.log(state);
  switch (action.type) {
    case "ADD_RESERVE":
      return [...state, action.trip];
    default:
      return state;
  }
}
