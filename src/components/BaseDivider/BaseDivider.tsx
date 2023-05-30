import React, { ReactElement } from "react";
import { DividerProps } from "antd";
import { BaseDividerStyled } from "./BaseDivider.styles";

export interface BaseDividerProps extends DividerProps {}

export const BaseDivider = (props: BaseDividerProps): ReactElement => {
  const { children, ...rest } = props;
  return <BaseDividerStyled {...rest}>{children}</BaseDividerStyled>;
};
