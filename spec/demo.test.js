const sum = require('./demo');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

it('adds correctly', () => {
  expect(1 + 1).toEqual(2);
});
