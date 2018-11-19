import React, { Component, Fragment } from "react";
import { ProxyWrappedAroundSingleTone } from "../utils/singletoneProxy";

class Boo extends Component {
  constructor(props) {
    super(props);
   
    this.proxyInstance = ProxyWrappedAroundSingleTone.proxy;
    this.proxySubscriber = ProxyWrappedAroundSingleTone.subscribe;
    this.proxySubscriber({ eventType: "set", handler: this.handlerDataChange, ref: this });
    this.state = this.proxyInstance.state;
  }

  handlerDataChange = val => {
    this.setState(val);
    //eslint-disable-next-line
    console.log("testText", this.testText);
  };

  render() {
    return (
      <Fragment>
        <div style={{color:'white',backgroundColor:'green'}}>
          <div>Boo object</div>
          <div>{this.state.name}</div>
        </div>
      </Fragment>
    );
  }
}

export default Boo;
