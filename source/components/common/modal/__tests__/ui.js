import { animation } from '../ui';

describe('source/components/common/modal/ui', () => {
  it('should return animatin class', () => {
    const data = {
      params: {
        position: 'top-left',
      },
    };

    expect(animation(data)).toEqual(expect.stringMatching(/^animation_/));
  });
});
