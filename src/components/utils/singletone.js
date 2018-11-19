
import {externalState} from "../utils/externalState";

export class SingleToneShallow {
  constructor() {
    if (!SingleToneShallow.instance) {
      this.state = externalState;
      SingleToneShallow.instance = this;
    }
    return SingleToneShallow.instance;
  }
}

//const instanceShallow = new SingleToneShallowInstance();
//Object.freeze(instanceShallow);
