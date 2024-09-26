import React from 'react';
import styled from 'styled-components';

export const Dropdown = ({}) => {
    return (
			<Wrapper>
				<DropdownContent>
					<Item>mashhala</Item>
					<Item>hehehe</Item>
					<Item>kekeke</Item>
					<Item>dagestan</Item>
				</DropdownContent>
			</Wrapper>
		)
};

const Wrapper = styled.div`
    position:absolute;
    top:70px;
    outline:1px solid black;
    width:349px;
    border-radius:22px;
`

const DropdownContent = styled.div`
    position: relative;
    font-size:22px;
    display:flex;
    flex-direction:column;
    margin:20px 0px;
`

const Item = styled.div`
	font-size: 22px;
	font-family: sans-serif;
	padding: 1px;

	&:hover {
		background-color: #ffb89a;
		cursor: pointer;
	}
`