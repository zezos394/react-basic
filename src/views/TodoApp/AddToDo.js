import React, { Component } from "react";
import { toast } from "react-toastify";

class AddToDo extends Component {
  state = {
    title: "",
  };
  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleAddTodo = () => {
    if (!this.state.title) {
      // undefined-null-empty => false
      toast.error("Missing title!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 10000),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    // Thằng con sử dụng function addNewTodo được truyền cho
    this.setState({
      title: "",
    });
  };
  render() {
    let { title } = this.state;
    return (
      <>
        <div className="add-todo">
          <input className="form-control input-text"
            type="text"
            value={title}
            onChange={(event) => this.handleOnChangeTitle(event)}
          />
          <button
            type="button"
            className="add btn-primary"
            onClick={() => this.handleAddTodo()}
          >
            Add
          </button>
        </div>
      </>
    );
  }
}

export default AddToDo;
