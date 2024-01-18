export const throttle = (callback: () => void, ms: number) => {
  let timer: ReturnType<typeof setTimeout> = null;

  return () => {
    if (timer) return;

    timer = setTimeout(() => {
      callback();

      clearTimeout(timer);
      timer = null;
    }, ms);
  };
};
