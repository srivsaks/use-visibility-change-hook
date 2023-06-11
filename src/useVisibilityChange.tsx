import { useEffect, useState } from "react";

const useVisibilityChange = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onFocus = () => {
    setIsVisible(true);
  };

  const onUnFocus = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onUnFocus);

    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onUnFocus);
    };
  }, []);
  return isVisible;
};
export default useVisibilityChange;
