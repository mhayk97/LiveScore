type MockFetcherOptions = {
  errorProbability?: number;
  delay?: number;
};

// Imitation of HTTP Request
export function mockFetcher<T>(
  data: T,
  options: MockFetcherOptions = { errorProbability: 0, delay: 800 }
): Promise<T> {
  const { errorProbability = 0, delay } = options;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() * 100 > errorProbability) {
        resolve(data);
      } else {
        reject(new Error("Something went wrong, please refresh the page"));
      }
    }, delay);
  });
}
