import { wait } from '.';

describe('wait', () => {
  test('should wait passed ms', async () => {
    jest.useFakeTimers();
    wait(1000);
    jest.runOnlyPendingTimers();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
});
