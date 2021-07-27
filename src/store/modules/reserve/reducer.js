import produce from "immer";

export default function reserve(state = [], action) {
  switch (action.type) {
    case "ADD_RESERVE_SUCCESS":
      return produce(state, (draft) => {
        draft.push(action.trip);
      });

    case "REMOVE_RESERVE":
      return produce(state, (draft) => {
        const tripId = draft.findIndex((trip) => trip.id === action.id);
        if (tripId >= 0) {
          draft.splice(tripId, 1);
        }
      });

    case "UPDATE_AMOUNT": {
      if (action.amount <= 0) {
        return state;
      }
      return produce(state, (draft) => {
        const tripId = draft.findIndex((trip) => trip.id === action.id);
        if (tripId >= 0) {
          draft[tripId].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
