import { useEffect, useState } from 'react';

/**
 * hook for render components by condition, like a styles in media css
 * @param query css media value
 * @returns boolean
 */

export const useMediaQuery = (query = 'only screen and (max-width: 767px)') => {
  const [isMatches, setIsMatches] = useState(false);

  const handleChange = (e: MediaQueryListEvent) => {
    setIsMatches(e.matches);
  };

  useEffect(() => {
    const match = window.matchMedia(query);

    setIsMatches(match.matches);

    match.addEventListener('change', handleChange);

    return () => {
      match.removeEventListener('change', handleChange);
    };
  }, [query]);

  return isMatches;
};
