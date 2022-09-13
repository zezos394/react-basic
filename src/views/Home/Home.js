import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";

class Home extends Component {
  state = {};
//   componentDidMount(){
//     setTimeout(() => {
//         this.props.history.push('/todo')
//     }, 3000);
//   }
  render() {
    //   console.log(">>> check props: ", this.props);
      return (
      <>
        <h1>This is Homepage</h1>
      </>
    );
  }
}

export default Color(Home);
