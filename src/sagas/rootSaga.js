import { all, takeEvery } from "redux-saga/effects";
import {
  addTodoSaga,
  searchTodoSaga,
  markAsPendingTodoSaga,
  markAsDoneTodoSaga,
  removeTodoSaga
} from "./todoSaga";
import ACTIONS from "../todo/actionsConstants";

export default function* rootSaga() {
  yield all([
    takeEvery(ACTIONS.TODO_ADD, addTodoSaga),
    takeEvery(ACTIONS.TODO_SEARCH, searchTodoSaga),
    takeEvery(ACTIONS.TODO_MARK_AS_PENDING, markAsPendingTodoSaga),
    takeEvery(ACTIONS.TODO_MARK_AS_DONE, markAsDoneTodoSaga),
    takeEvery(ACTIONS.TODO_REMOVE, removeTodoSaga)
  ]);
  // code after all-effect
}
