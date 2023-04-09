import requestAPI from '../services/requestAPI';

describe('requestAPI function', () => {
  it('should return an array of objects', async () => {
    const result = await requestAPI();
    expect(Array.isArray(result)).toBe(true);
    expect(typeof result[0]).toBe('object');
  });

  it('should remove "residents" property from each object', async () => {
    const result = await requestAPI();
    expect(result[0].residents).toBe(undefined);
    expect(result[1].residents).toBe(undefined);
    expect(result[2].residents).toBe(undefined);
    // ...continue for each planet in the response
  });

  it('should handle errors', async () => {
    const consoleSpy = jest.spyOn(console, 'error');
    const error = new Error('Something went wrong');
    jest.spyOn(window, 'fetch').mockRejectedValue(error);

    const result = await requestAPI();

    expect(result).toBe(undefined);
    expect(consoleSpy).toHaveBeenCalledWith(error);

    consoleSpy.mockRestore();
    window.fetch.mockRestore();
  });
});
