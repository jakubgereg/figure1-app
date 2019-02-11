import { trimExcess } from "../utils";

it("should trim text correctly", () => {
  expect(trimExcess("this text is too long", 8)).toEqual("this...");
  expect(trimExcess("this text is too long", 10)).toEqual("this text...");
  expect(trimExcess("this text is too long", 11)).not.toEqual("this text i...");
});
