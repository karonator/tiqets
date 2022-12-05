import { useState, useCallback, useEffect } from 'react';

const useClampedText = (
  elementRef: React.RefObject<HTMLHeadingElement>,
  text: string,
  lines: number
):(
  string | null
  )[] => {
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const [lineHeight, setLineHeight] = useState<number | null>(null);
  const [clampedText, setClampedText] = useState<string>(text);

  const getHeight = useCallback(() => {
    if (elementRef && elementRef.current) {
      if (!lineHeight) {
        const styles = window.getComputedStyle(elementRef.current);
        setLineHeight(parseInt(styles.lineHeight, 10));
      }
      const { height } = elementRef.current.getBoundingClientRect();
      setContainerHeight(height);
    }
  }, [elementRef]);

  useEffect(() => {
    if (CSS.supports('-webkit-line-clamp', '1')) {
      setClampedText(text);
    } else {
      getHeight();
      window.addEventListener('resize', getHeight);
      return () => {
        window.removeEventListener('resize', getHeight);
      };
    }
    return undefined;
  }, [getHeight]);

  useEffect(() => {
    if (lineHeight && containerHeight) {
      const symbolsPerLine = Math.floor(text.length / (containerHeight / lineHeight));
      const textLength = symbolsPerLine * lines - 3;
      setClampedText(`${text.slice(0, textLength)}...`);
    }
  }, [lineHeight, containerHeight]);

  return [clampedText];
};

export default useClampedText;
