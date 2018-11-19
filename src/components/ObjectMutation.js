import React, { Component, Fragment } from "react";
import { externalState } from "./utils/externalState";
//import PropTypes from 'prop-types';

class ObjectMutation extends Component {
  constructor(props) {
    super(props);
    this.state = externalState;
  }

  handleClick = () => {
    let newRoomIds = this.state.RoomIds;
    newRoomIds['foo'] = {nnm:'sds', lll: 'dfd'};
    newRoomIds.keys().
    this.setState(this.state);
    //eslint-disable-next-line
    console.log(newRoomIds);
  };

  render() {
    return (
      this.state.status.statusId >= 0 && (
        <Fragment>
          <span>Object Mutation</span>

          <div>
            {this.state.parents.length > 0 && (
              <Fragment>
                {this.state.RoomIds.map((item,key) => {
                    return (
                        <div key={key}>{item}</div>
                    )
                })}
                <button onClick={this.handleClick}>Mutate Romm ids</button>
              </Fragment>
            )}
          </div>
        </Fragment>
      )
    );
  }
}

ObjectMutation.propTypes = {};

export default ObjectMutation;
