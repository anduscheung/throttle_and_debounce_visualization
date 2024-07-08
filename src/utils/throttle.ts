function throttle<T extends (...args: any[]) => void>(callback: T, limit: number) {
  let wait = false;
  return function (...args: Parameters<T>) {
    if (!wait) {
      callback(...args);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}

export default throttle;
