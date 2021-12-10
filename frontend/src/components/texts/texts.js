import React from "react";
import * as S from './style';

export const InlineIconText = ({text,icon,fontSize}) =>{
    return (
        <S.Text variant="body2" display='inline-flex' alignitems='center' fontSize={fontSize}>
            {icon} {text}
        </S.Text>
    );
}