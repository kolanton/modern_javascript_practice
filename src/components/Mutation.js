import React, { Component, Fragment } from "react";
import { externalState } from "./utils/externalState";

//import PropTypes from 'prop-types';

class Mutation extends Component {
  constructor(props) {
    super(props);
    //this.state = externalState;
    this.state = externalState;
  }

  stringMutation = () => {
    let str1 = "foo";
    let str2 = new String("foo");
    return str1 == str2;
  };

  numberMutation = () => {
    let num1 = 7;
    let num2 = new Number(7);
    return num1 == num2;
  };

  getParentsData = parents => {
    //eslint-disable-next-line
    let newArray = parents.splice(0, 1);

    //do something with new array
  };

  calculateStatus = () => {
    //do something
  };

  updateSecondParent = () =>{
      let parents = this.state.parents;
      parents[1].Name = 'Idan';
  }

  handleClick = () => {
    let newState = this.state;
    this.getParentsData([...newState.parents]);
    this.calculateStatus();
    this.updateSecondParent();
    this.setState(newState);
  };

  render() {
    return (
      this.state.status.statusId >= 0 && (
        <Fragment>
          <span>Mutation</span>
          <div>Two strings compare: {this.stringMutation().toString()}</div>
          <div>Two numbers compare: {this.numberMutation().toString()}</div>
          <div>
            {this.state.parents.length>0 && (
              <Fragment>
                <span>State mutation</span>
                <div>{this.state.parents[1].Name}</div>
                <button onClick={this.handleClick}>Mutate state</button>
              </Fragment>
            )}
          </div>
        </Fragment>
      )
    );
  }
}

Mutation.propTypes = {};

export default Mutation;
