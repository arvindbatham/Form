import { useEffect, useState } from "react";

function useEnterKey() {
  const [isEnterKeyPressed, setIsEnterKeyPressed] = useState(false);
  const [eventObj, setEventObj] = useState(null);

  const enterHandler = (e) => {
    if (e.keyCode === 13) {
      setIsEnterKeyPressed(true);
      setEventObj(e);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", enterHandler, true);
    return () => {
      document.removeEventListener("keydown", enterHandler, true);
    };
  }, []);

  return [isEnterKeyPressed, eventObj];
}

export default useEnterKey;
