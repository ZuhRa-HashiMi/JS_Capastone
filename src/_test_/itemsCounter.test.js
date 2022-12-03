import ItemsCounter from '../_mock_/itemsCounter.js';

// test for pagination
describe('return the lengty of array zuhra', () => {
  test('return the lengty of array zuhra', () => {
    // Arrange
    const items = [1, 2, 3, 4, 5, 6];
    // ACT
    const itemsCounter = new ItemsCounter(items);
    // Assert
    expect(itemsCounter.getLength()).toBe(6);
  });
});
