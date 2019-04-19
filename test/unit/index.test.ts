import { subtract, sum } from '../../src';

describe('Calculations', () => {
  it('should sum two numbers', () => {
    const result = sum(1, 2);

    expect(result).toBe(3);
  });

  it('should subtract two numbers', () => {
    const result = subtract(2, 1);

    expect(result).toBe(1);
  });
});
