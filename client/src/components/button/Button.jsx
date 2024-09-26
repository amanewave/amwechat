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
	padding: ${props => props.pad || '10px 15px'};
	width: ${props => props.width || '100%'};
	font-size: ${props => props.fz || '22px'};
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background-color: #29a880;
	}
`