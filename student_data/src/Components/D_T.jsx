import React from "react";

class D_T extends React.Component {
  state = {
    curTime: new Date().toLocaleString(),
  };
  render() {
    return <p>{this.state.curTime}</p>;
  }
}

export default D_T;
