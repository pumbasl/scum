import React from 'react';
import { css } from '@emotion/react';

export default function Wrapper({ children }){
    const cssWrapper = css`
        display: flex;
        flex-direction: column;
        height: 100%;
        background: linear-gradient(to right, purple, indianred);
    `;

    return(
        <div
            css={cssWrapper}
        >
            {children}
        </div>
    );
}