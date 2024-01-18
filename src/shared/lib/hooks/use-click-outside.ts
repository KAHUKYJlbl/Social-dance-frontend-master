import { useEffect, useCallback } from 'react';

export const useClickOutside = <T extends HTMLElement>(
  callback: () => void,
  ref: React.MutableRefObject<T | null>,
) => {
  const savedCallback = useCallback(callback, []);

  useEffect(() => {
    if (!ref.current) return;

    const handleClose = (e: PointerEvent) => {
      const target = e.target as Node;
      // Проверяем, что наш таргет не является элементом, на который указывает ref, и не содержится в нем
      if (ref.current && !ref.current.isEqualNode(target) && !ref.current.contains(target)) {
        savedCallback();
      }
    };

    document.addEventListener('pointerdown', handleClose);

    return () => {
      document.removeEventListener('pointerdown', handleClose);
    };
  }, [ref, savedCallback]);
};
