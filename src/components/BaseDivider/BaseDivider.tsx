import React, { ReactElement } from "react";
import { DividerProps } from "antd";
import { BaseDividerStyled } from "./BaseDivider.styles";

export interface BaseDividerPops extends DividerProps {}

export const BaseDivider = (props: BaseDividerPops): ReactElement => {
  const { children, ...rest } = props;
  return <BaseDividerStyled {...rest}>{children}</BaseDividerStyled>;
};
