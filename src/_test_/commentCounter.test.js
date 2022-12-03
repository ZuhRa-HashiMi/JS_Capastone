import CommentsCounter from '../_mock_/commentsCounter.js';

describe('Check Items count number', () => {
  test('return the length of array', () => {
    // Arrange
    const comments = ['comment1', 'comment2', 'comment3', 'comment4', 'comment5', 'comment6', 'comment7', 'comment8'];
    // ACT
    const commentCounter = new CommentsCounter(comments);
    // Assert
    expect(commentCounter.getLength()).toEqual(8);
  });
});