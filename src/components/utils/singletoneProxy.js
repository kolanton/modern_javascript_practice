import {SingleToneShallow} from "./singletone";

export class SubscribeModel {
  constructor(params) {
    this.key = params.key || null;
    this.eventType = params.eventType || null;
    this.ref = params.ref || null;
    this.handler = params.handler || null;
    this.scope = params.scope || null;
  }
}

const createProxyWrappedAroundSingleTone = () => {
  let listOfSubscribers = [];
  let handler = {
    set: function(obj, prop, value) {
      //trigger every subscriber
      let setSubscribers = listOfSubscribers.filter(
        it => it.eventType === "set"
      );
      setSubscribers.forEach((val) => {
        val.handler(value);
      });

      obj[prop] = prop in obj ? value : null;
      return true;
    },
    get: function(obj, prop,value) {
      //trigger every subscriber
      let setSubscribers = listOfSubscribers.filter(
        it => it.eventType === "get"
      );
      
      setSubscribers.forEach((val) => {
        val.handler(value);
      });

      return prop in obj ? obj[prop] : null;
    }
  };

  let getExistingSubscriber = subscribeObject => {
    subscribeObject.key =
      subscribeObject.eventType + subscribeObject.ref.constructor.name.toString();
    let existing = listOfSubscribers.find(it => it.key === subscribeObject.key);
    return typeof existing === "undefined" ? null : existing;
  };

  let subscribe = (subscribeObject) => {
    let subscriber = new SubscribeModel(subscribeObject);
    if (getExistingSubscriber(subscriber) === null)
      listOfSubscribers.push(subscriber);
  };

  let unsubscribe = subscribeObject => {
    let subscriber = new SubscribeModel(subscribeObject);
    let existing = getExistingSubscriber(subscriber);
    let index = existing === null ? -1 : listOfSubscribers.indexOf(existing);
    if (index >= 0) listOfSubscribers.splice(index, 1);
  };

  let st = new SingleToneShallow();
  let proxy = new Proxy(st, handler);

  return {
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    proxy: proxy
  };
};

export const ProxyWrappedAroundSingleTone = createProxyWrappedAroundSingleTone();

