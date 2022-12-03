import ItemsCounter from '../_mock_/itemsCounter.js';

// test for pagination
describe('return the lengty of array', () => {
  test('return the lengty of array', () => {
    // Arrange
    const items = [1, 2, 3, 4, 5];
    // ACT
    const itemsCounter = new ItemsCounter(items);
    // Assert
    expect(itemsCounter.getLength()).toBe(5);
  });
});