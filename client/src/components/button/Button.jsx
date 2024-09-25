import React from 'react';
import styled from 'styled-components'

export const Button = (props) => {

    return (
        <StyledButton {...props}>
            {props.value}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    background-color:#30cc9b;
    border:1px solid black;
    padding:10px 15px;
    width:${props=>props.width || '100%'};
`