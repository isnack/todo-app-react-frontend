import { call, put } from "redux-saga/effects";

import {
  AddTodo,
  ListTodos,
  MarkAsPendingTodo,
  MarkAsDoneTodo,
  RemoveTodo
} from "../services/httpTodoService";
import { search } from "../todo/todoActions";
import ACTIONS from "./../todo/actionsConstants";

export function* addTodoSaga(action) {
  try {
    console.log("saga");
    yield call(AddTodo, action.payload.description);
    yield put({ type: ACTIONS.TODO_ADDED, payload: "" });
    yield put(search());
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error });
  }
}

export function* searchTodoSaga(action) {
  try {
    const response = yield call(ListTodos, action.payload.description);

    yield put({ type: ACTIONS.TODO_SEARCHED, payload: response.data });
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error });
  }
}

export function* markAsPendingTodoSaga(action) {
  try {
    const response = yield call(MarkAsPendingTodo, action.payload.todo);
    console.log(action);
    yield put({ type: ACTIONS.TODO_MARKED_AS_PENDING, payload: response.data });
    yield put(search(action.payload.description));
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error });
  }
}

export function* markAsDoneTodoSaga(action) {
  try {
    const response = yield call(MarkAsDoneTodo, action.payload.todo);
    console.log(action);
    yield put({ type: ACTIONS.TODO_MARKED_AS_DONE, payload: response.data });
    yield put(search(action.payload.description));
  } catch (error) {
    console.log(error);
    yield put({ type: "FETCH_FAILED", error });
  }
}

export function* removeTodoSaga(action) {
  try {
    const response = yield call(RemoveTodo, action.payload.idTodo);
    console.log(response.data);
    yield put({ type: ACTIONS.TODO_CLEAR, payload: response.data });
    yield put(search());
  } catch (error) {
    console.log(error);
    yield put({ type: "FETCH_FAILED", error });
  }
}
