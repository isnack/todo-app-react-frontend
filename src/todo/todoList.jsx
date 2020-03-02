import React from "react";
import { connect } from "react-redux";
import IconButton from "../teamplate/iconButton";

import { markAsPending, markAsDone, remove } from "./todoActions";
import { bindActionCreators } from "redux";

const TodoList = props => {
  const renderRows = () => {
    const list = props.list || [];

    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? "markAsDone" : ""}>{todo.description}</td>
        <td>
          <IconButton
            hide={todo.done}
            style="success"
            icon="check"
            onClick={() => props.markAsDone(todo, props.description)}
          />
          <IconButton
            hide={!todo.done}
            style="warning"
            icon="undo"
            onClick={() => props.markAsPending(todo, props.description)}
          />

          <IconButton
            hide={!todo.done}
            style="danger"
            icon="trash-o"
            onClick={() => props.remove(todo._id)}
          />
        </td>
      </tr>
    ));
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  list: state.todo.list,
  description: state.todo.description
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
