import { initializeTimes, updateTimes } from "./Main";

test("initializeTimes returns the correct expected array of available times", () => {
  // The exact array we expect the function to produce
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  // Call the function and store the result
  const result = initializeTimes();

  // Assert that the result perfectly matches the expected array
  expect(result).toEqual(expectedTimes);
});

test("updateTimes returns the exact same state that was provided to it", () => {
  // The initial state we pass in
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  // A mock action (representing a date change)
  const action = { type: "UPDATE_TIMES", payload: "2026-05-27" };

  // Call the reducer function
  const newState = updateTimes(initialState, action);

  // Assert that the state remains unchanged (for now, as per instructions)
  expect(newState).toEqual(initialState);
});
