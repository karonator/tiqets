import { useState, useCallback, useEffect } from 'react';

const useWidth = (elementRef: React.RefObject<HTMLDivElement>) => {
  const [resultWidth, setResultWidth] = useState<number | null>(null);

  const updateWidth = useCallback(() => {
    if (elementRef && elementRef.current) {
      const { width } = elementRef.current.getBoundingClientRect();
      setResultWidth(width);
    }
  }, [elementRef]);

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [updateWidth]);

  return [resultWidth];
};

export default useWidth;
