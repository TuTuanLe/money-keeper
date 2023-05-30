import { DividerProps } from "antd";
import React, { ReactElement } from "react";
import { BaseDividerStyled } from "./BaseDivider.styles";

export interface BaseDividerPops extends DividerProps {}

export const BaseDivider = (props : BaseDividerPops) : ReactElement => {
    const {children, ...rest} = props;
    return <BaseDividerStyled {...rest}>{children}</BaseDividerStyled>
}