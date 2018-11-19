import Mutation from "./Mutation"
  describe("Number", function() {
    it("Numbers should be immutable", function() {
      let instance = new Mutation();
      expect(instance.numberMutation()).toBeTruthy();
    });
    
  });
