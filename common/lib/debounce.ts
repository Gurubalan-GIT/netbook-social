let timer: NodeJS.Timeout;
export const debounce = (callback: (query: string) => void, delay: number) => {
  return (...args: any) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => callback.apply(self, args), delay);
  };
};
