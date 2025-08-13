import { useEffect, useRef } from "react";

export function useOutsideClick(
  handler,
  exceptions = [],
  listenCapturing = true
) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      const clickedInsideTarget = ref.current && ref.current.contains(e.target);

      const clickedOnException = exceptions.some(
        (exc) => exc?.current && exc.current.contains(e.target)
      );

      if (!clickedInsideTarget && !clickedOnException) {
        handler();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);
    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
    };
  }, [handler, listenCapturing, exceptions]);

  return ref;
}
