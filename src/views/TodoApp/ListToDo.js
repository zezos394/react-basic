import React, { Component } from "react";
import AddToDo from "./AddToDo";
import "./ListToDo.scss";
import { toast } from "react-toastify";

class ListToDo extends Component {
  state = {
    listTodos: [
      { id: "1", title: "Learning React" },
      { id: "2", title: "Learning React" },
      { id: "3", title: "Learning React" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Done!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };
  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    // save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];
      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);
      listTodosCopy[objIndex].title = editTodo.title;
      this.setState({
        listTodos: listTodosCopy,
        editTodo: {},
      });
      toast.success("Updated!", {
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
    // edit
    this.setState({
      editTodo: todo,
    });
  };
  handleOnChangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.listTodos;
    // Lọc ra, chỉ lấy những item có id khác với id thằng bị delete
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    // Hiển thị lại
    this.setState({
      listTodos: currentTodos,
    });
    toast.success("Deleted!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };
  render() {
    let { listTodos, editTodo } = this.state;
    // let listTodos = this.state.listTodos
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <>
        <h1 className="title">What to do?</h1>
        <div className="list-todo-container">
          {/* Truyền function addNewTodo cho thằng con */}
          <AddToDo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}{" "}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnChangeEditTodo(event)
                              }
                            />{" "}
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}{" "}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="delete btn-danger"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete
                    </button>
                    <button
                      className="edit btn-primary"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default ListToDo;
