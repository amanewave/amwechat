import React from 'react';
import styled from 'styled-components';

export const Dropdown = ({searhHistory}) => {

	
    return (
			<Wrapper>
				<DropdownContent>
					<Item>
					
					</Item>
				</DropdownContent>
			</Wrapper>
		)
};

const Wrapper = styled.div`
	position: absolute;
	top: 70px;
	outline: 2px solid #aacbcb;
	border-radius: 22px;
	width: 100%;
	background-color: #4d4e4e;
`

const DropdownContent = styled.div`
	position: relative;
	font-size: 22px;
	display: flex;
	flex-direction: column;
	margin: 10px 0px;
`

const Item = styled.div`
	font-size: 18px;
	font-family: sans-serif;
	padding: 1px;
	color:white;
	font-weight:100;
	padding-left:20px;
	&:hover {
		background-color: #aacbcb;
		cursor: pointer;
	}
`