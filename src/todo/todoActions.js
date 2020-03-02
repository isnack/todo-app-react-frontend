import ACTIONS from "./actionsConstants";

export const changeDescription = event => ({
  type: ACTIONS.DESCRIPTION_CHANGED,
  payload: event.target.value
});

export function search(description = "") {
  return {
    type: ACTIONS.TODO_SEARCH,
    payload: { description }
  };
}

export function add(description) {
  return {
    type: ACTIONS.TODO_ADD,
    payload: { description }
  };
}

export const markAsDone = (todo, description) => {
  return {
    type: ACTIONS.TODO_MARK_AS_DONE,
    payload: { description, todo }
  };
};

export const markAsPending = (todo, description) => {
  return {
    type: ACTIONS.TODO_MARK_AS_PENDING,
    payload: { description, todo }
  };
};

export const remove = idTodo => {
  return {
    type: ACTIONS.TODO_REMOVE,
    payload: { idTodo }
  };
};

export const clear = () => {
  return dispatch => {
    dispatch({ type: ACTIONS.TODO_CLEAR });
  };
};
