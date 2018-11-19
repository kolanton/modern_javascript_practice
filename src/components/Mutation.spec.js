import Mutation from "../components/Mutation";
describe("Data mutation", function() {
  describe("Value types should be immutable", function() {
    it("Strings should be Immutable", function() {
      let instance = new Mutation();
      expect(instance.stringMutation()).toBeTruthy();
    });
    it("Numbers should be Immutable", function() {
      let instance = new Mutation();
      expect(instance.numberMutation()).toBeTruthy();
    });
  });
});
