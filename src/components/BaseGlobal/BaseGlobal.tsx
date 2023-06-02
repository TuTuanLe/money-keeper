import React, { ReactElement, ReactNode } from "react";
import { BaseGlobalStyles } from "./BaseGlobal.style";

interface BaseGlobalProps {
  children: ReactNode;
}

function BaseGlobal({ children }: BaseGlobalProps): ReactElement {
  return <BaseGlobalStyles>{children}</BaseGlobalStyles>;
}

export default BaseGlobalStyles;
