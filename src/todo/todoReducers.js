import ACTIONS from "./actionsConstants";

const INITIAL_STATE = {
  description: "",
  list: [
    { _id: 1, description: "estudar  react", done: true },
    { _id: 2, description: "matar  react", done: false }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.DESCRIPTION_CHANGED:
      return { ...state, description: action.payload };
    case ACTIONS.TODO_SEARCHED:
      return { ...state, list: action.payload };
    case ACTIONS.TODO_CLEAR:
    case ACTIONS.TODO_ADDED:
      return { ...state, description: "" };
    default:
      return state;
  }
};
