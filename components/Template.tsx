import React, { useContext } from "react";
import { FullContext } from "../context/Context";

type Props = {
  children?: any;
};

function Template({ children }: Props) {
  const appContext = useContext(FullContext);
  return (
    <div
      id="layoutApp"
      style={{
        background: appContext?.theme.bgFull,
        color: appContext?.theme.fgText,
      }}
      className="snap-y snap-mandatory overflow-x-hidden z-0"
    >
      {children}
    </div>
  );
}

export default Template;
