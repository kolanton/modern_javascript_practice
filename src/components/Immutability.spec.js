import { externalState } from "./utils/externalState";
import { SingleToneShallow } from "./utils/singletone";

import { produce } from "immer";
describe("Data immutable", function() {
  describe("Immutable objects", function() {
    it("Make sure we have mutation", function() {
      let newState = { ...externalState };
      newState.parents[0].Name = "foo";
      expect(newState.parents === externalState.parents).toBeTruthy();
    });
    it("Make sure we make it immutable", function() {
      let newState = produce(externalState, draft => {
        draft.parents[0].Name = "boo";
      });
      expect(newState.parents !== externalState.parents).toBeTruthy();
    });
  });
  describe("Test singletone", function() {
    it("Singletone instance should be same every time created...", function() {
      let st1 = new SingleToneShallow();
      let st2 = new SingleToneShallow();
      expect(st1 === st2).toBeTruthy();
    });
  });
});
