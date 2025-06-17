import { useState, useEffect } from "react";

interface UsePageLoaderProps {
  minLoadingTime?: number;
  simulateDelay?: boolean;
}

export const usePageLoader = ({
  minLoadingTime = 1000,
  simulateDelay = true,
}: UsePageLoaderProps = {}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (simulateDelay) {
      timer = setTimeout(() => {
        setIsLoading(false);
      }, minLoadingTime);
    } else {
      setIsLoading(false);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [minLoadingTime, simulateDelay]);

  return { isLoading, setIsLoading };
};
