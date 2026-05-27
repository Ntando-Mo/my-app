import { initializeTimes, updateTimes } from './Main';

test('initializeTimes returns a non-empty array of available booking times', () => {
  // Call the function to get the initial times
  const result = initializeTimes();
  
  // Assert that the result is an array
  expect(Array.isArray(result)).toBe(true);
  
  // Assert that the array is not empty (it contains at least one time slot)
  expect(result.length).toBeGreaterThan(0);
});

test('updateTimes returns a non-empty array of times when a date is dispatched', () => {
  // Set up a dummy initial state
  const initialState = ['17:00', '18:00'];
  
  // Create an action with a pre-selected date
  const action = { type: 'UPDATE_TIMES', payload: '2026-05-27' };
  
  // Call the reducer function
  const newState = updateTimes(initialState, action);
  
  // Assert that the newly generated state is an array
  expect(Array.isArray(newState)).toBe(true);
  
  // Assert that the new array is not empty
  expect(newState.length).toBeGreaterThan(0);
});