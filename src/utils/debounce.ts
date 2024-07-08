function debounce<T extends (...args: any[]) => void>(callback: T, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return function (...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, wait);
  };
}

export default debounce;
