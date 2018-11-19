import React, { Component } from "react";
import { produce } from "immer";
import { externalState } from "./utils/externalState";
//import PropTypes from 'prop-types';

class Immutability extends Component {
  constructor(props) {
    super(props);
    this.externalState = externalState;
  }

  compareObj = () => {
    let obj1 = { ...this.externalState };
    obj1.parents[0].Name = "foo";
    return obj1.parents == this.externalState.parents;
  };

  compareObjImmutable = () => {
    let obj2 = produce(this.externalState, draft => {
      draft.parents[0].Name = "boo";
    });
   
    return obj2.parents == this.externalState.parents;
  };

  render() {
    return (
      <div>
        Immutability common way: {this.compareObj().toString()}
        <br/>
        Immutability immutable way: {this.compareObjImmutable().toString()}
      </div>
    );
  }
}

Immutability.propTypes = {};

export default Immutability;
