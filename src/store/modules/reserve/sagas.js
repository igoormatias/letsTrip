import { select, call, put, takeLatest, all } from "redux-saga/effects";
import { addReserveSuccess, handleUpdateAmount } from "./actions";

import api from "../../../services/api";

function* addToReserve({ id }) {
  const tripExists = yield select((state) =>
    state.reserve.find((trip) => trip.id === id)
  );

  if (tripExists) {
   const amount = tripExists.amount +1;

   yield put(handleUpdateAmount(id, amount))

  } else {
    const response = yield call(api.get, `trips/${id}`);

    const data = {
        ...response.data,
        amount:1,
    }

    yield put(addReserveSuccess(data));
  }
}

export default all([takeLatest("ADD_RESERVE_REQUEST", addToReserve)]);
