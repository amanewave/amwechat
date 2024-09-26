import React from 'react';
import styled from 'styled-components';
import { StyledInput } from '../input/StyledInput';

export const ChatList = () => {
    return (
			<Wrapper>
				<HeaderText>Ваши чаты</HeaderText>
				<StyledSearch />

				<ChatsWrapper>
					<Item>фывфывфыв</Item>
					<Item>фывфывфыв</Item>
					<Item>фывфывфыв</Item>
					<Item>фывфывфыв</Item>
					<Item>фывфывфыв</Item>
					<Item>фывфывфыв</Item>
					<Item>фывфывфыв</Item>
				</ChatsWrapper>
			</Wrapper>
		)
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 20vw;
	height: 85vh;
	border-right: 2px solid #30cc9b;
	align-items: center;
`

const HeaderText = styled.h3`
    font-size:25px;
    font-weight:500;
    font-family:sans-serif;
    margin:20px 0px;
`
const StyledSearch = styled(StyledInput)`
    width:300px;
    padding:10px 15px;
    font-size:16px;
    margin-top:25px;
    border-radius:20px;
    border:1px;
`

const ChatsWrapper = styled.div`
    display:flex;
    flex-direction:column;
`

const Item = styled.div`
    
`