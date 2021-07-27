export function handleAddReserve(trip) {
  return {
    type: "ADD_RESERVE",
    trip,
  };
}

export function handleRemoveReserve(id) {
  return {
    type: "REMOVE_RESERVE",
    id,
  };
}
