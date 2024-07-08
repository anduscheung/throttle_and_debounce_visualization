const throttleWithDebounce = <T extends (...args: any[]) => void>(callback: T, limit: number) => {
  let wait = false;
  let lastCall: ReturnType<typeof setTimeout> | null = null;

  return function (...args: Parameters<T>) {
    if (!wait) {
      callback(...args);
      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
    } else {
      if (lastCall) {
        clearTimeout(lastCall);
      }
      lastCall = setTimeout(() => {
        callback(...args);
        lastCall = null;
      }, limit);
    }
  };
};

export default throttleWithDebounce;
