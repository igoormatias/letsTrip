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

// ouvida pelo redux saga
export function UpdateAmountRequest(id, amount) {
  return {
    type: "UPDATE_RESERVE_REQUEST",
    id,
    amount,
  }
}

// ouvida pela reducer
export function updateAmountSuccess(id, amount) {
  return {
    type: "UPDATE_RESERVE_SUCCESS",
    id,
    amount,
  }
}