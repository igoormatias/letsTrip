export function addReserveRequest(id) {
  return {
    type: "ADD_RESERVE_REQUEST",
    id,
  };
}
export function addReserveSuccess(trip) {
  return {
    type: "ADD_RESERVE_SUCCESS",
    trip,
  };
}

export function handleRemoveReserve(id) {
  return {
    type: "REMOVE_RESERVE",
    id,
  };
}

export function handleUpdateAmount(id, amount) {
  return {
    type: "UPDATE_AMOUNT",
    id,
    amount,
  }
}