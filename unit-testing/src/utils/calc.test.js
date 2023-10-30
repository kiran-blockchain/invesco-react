import { add, sub } from "./calc";
//wrapper
describe("wanted to test add method", () => {
    it("should add two numbers if they are integers", () => {
        const actual = add(1, 2);
        const expected = 3;
        expect(actual).toEqual(expected);
    });
    it("should contact if they are strings", () => {
        const actual = add("invesco ", "app");
        const expected = "invesco app";
        expect(actual).toEqual(expected);
    });

});
describe("should test sub method", () => {
    it("sub should deduct if they are numbers", () => {
        const actual = sub(10, 5);
        const expected = 5;
        expect(actual).toEqual(expected);
    });
})
