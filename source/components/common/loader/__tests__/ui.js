import { squareRotate } from '../ui';

describe('source/components/common/loader/ui', () => {
  it('should return animatin class', () => {
    expect(squareRotate).toEqual(expect.stringMatching(/^animation_/));
  });
});
