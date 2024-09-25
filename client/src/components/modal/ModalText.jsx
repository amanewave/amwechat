import React from 'react'
import styled from 'styled-components'

const StyledModalText = styled.h2`
	color: ${props => props.color || 'black'};
    margin:0px;
    font-size:18px;
    font-family:sans-serif;
    font-weight:500;
    margin-bottom:10px;
`

export const ModalText = (props) =>{
    return <StyledModalText {...props}/>
}