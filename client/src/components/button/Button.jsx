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
	background-color: ${props => props.color || '#30cc9b'};
	border: 1px solid black;
	padding: 10px 15px;
	width: ${props => props.width || '100%'};
    border-radius:5px;
    cursor: pointer;
	&:hover {
		background-color:#29a880;
	}
`