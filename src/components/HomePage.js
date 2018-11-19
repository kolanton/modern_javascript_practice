import React, { Fragment } from "react";
import Boo from "./subComponents/boo";
import Foo from "./subComponents/foo";
import {ProxyWrappedAroundSingleTone} from "./utils/singletoneProxy";

class HomePage extends React.Component {
  mutateState = (e) => {
    let state = {...ProxyWrappedAroundSingleTone.proxy.state};
    state.name = e.target.value;
    ProxyWrappedAroundSingleTone.proxy.state = state;
    //eslint-disable-next-line
    console.log(e.target.value);
  };
  render() {
    return (
      <Fragment>
        <div>Manual store observer</div>
        <Boo />
        <Foo />

        <label>Mutate global state</label>
        <input onChange={(e) => this.mutateState(e)}/>
      </Fragment>
    );
  }
}

export default HomePage;
