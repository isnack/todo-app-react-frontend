import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "./../teamplate/grid";
import IconButton from "./../teamplate/iconButton";
import { changeDescription } from "./todoActions";
import { add, search, clear } from "./todoActions";

const TodoForm = props => {
  useEffect(() => {
    props.search();
  });

  return (
    <div role="form" className="todoForm">
      <Grid cols="12 9 10">
        <input
          id="description"
          className="form-control"
          onChange={props.changeDescription}
          placeholder="Adicione uma tarefa"
          value={props.description}
        />
      </Grid>
      <Grid cols="12 3 2">
        <IconButton
          style="primary"
          icon="plus"
          onClick={() => props.add(props.description)}
        ></IconButton>
        <IconButton
          style="info"
          icon="search"
          onClick={() => props.search(props.description)}
        ></IconButton>
        <IconButton
          style="default"
          icon="close"
          onClick={props.clear}
        ></IconButton>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => ({ description: state.todo.description });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeDescription, add, search, clear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
