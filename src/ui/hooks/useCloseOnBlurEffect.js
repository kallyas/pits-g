// @flow
import * as React from "react";

export const useCloseOnBlurEffect = (ref, closeCallback) =>
  React.useLayoutEffect(() => {
    const handleClick = (evt) => {
      if (!ref.current?.contains(evt.target)) {
        closeCallback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [closeCallback, ref]);
