import React from 'react'
import styled from 'styled-components'

export const StyledInput = (props) => {
		return <StInput {...props}/>
	}

const StInput = styled.input`
	padding: 10px 15px;
	outline: 1px solid black;
	margin-bottom: 30px;
	font-size: 16px;
	width: ${props =>props.width || '100%'}
`
	