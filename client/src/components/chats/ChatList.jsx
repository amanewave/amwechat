import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledInput } from '../input/StyledInput'
import ProfileIcon from '../../assets/profile.svg'

const chats = [
	{
		img: ProfileIcon,
		username: 'Андрюха',
		id: 1,
	},
	{
		img: ProfileIcon,
		username: 'Данек',
		id: 2,
	},
	{
		img: ProfileIcon,
		username: 'Дрон',
		id: 3,
	},
	{
		img: ProfileIcon,
		username: 'Илюха',
		id: 4,
	},
]

export const ChatList = () => {
	const [value, setValue] = useState('')

	console.log(value)

	const filtredChats = chats.filter(user => user.username.toLowerCase().indexOf(value.toLowerCase()) > -1)

	const ChatUser = filtredChats.map(user => (
		<Item>
			<div>
				<StyledProfileIcon src={user.img} />
			</div>
			<UsernameInfo>
				<StyledUsername isHighlight={value.toLowerCase() === user.username.toLowerCase()}>
					{user.username}
				</StyledUsername>
				<MessageWrapper>
					<LastMessage>{user.id}</LastMessage>
				</MessageWrapper>
			</UsernameInfo>
		</Item>
	))

	return (
		<Wrapper>
			<HeaderText>Ваши чаты</HeaderText>
			<div style={{ padding: '10px', display: 'flex', width: '100%' }}>
				<StyledSearch onChange={e => setValue(e.target.value)} />
			</div>

			<ChatsWrapper>{ChatUser}</ChatsWrapper>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	height: calc(100vh - 60px);
	align-items: center;
`

const HeaderText = styled.h3`
	font-size: 25px;
	font-weight: 500;
	font-family: sans-serif;
	margin: 20px 0px;
`
const StyledSearch = styled(StyledInput)`
	padding: 10px 15px;
	font-size: 16px;
	border-radius: 20px;
	border: 1px;
	flex-grow: 1;
`

const ChatsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	overflow-y: scroll;
	padding-left: 10px;
	width: 100%;
	padding-bottom:20px;
	&::-webkit-scrollbar {
		width: 8px;
		background: transparent;
		border-radius: 40px;
	}

	&::-webkit-scrollbar-thumb {
		width: 6px;
		background: #6da0a0;
		border-radius: 40px;
	}
`

const Item = styled.div`
	display: flex;
	align-items: center;
	width:80%;
`

const StyledProfileIcon = styled.img`
	width: 25px;
	margin-right: 5px;

`

const StyledUsername = styled.div`
	margin: 0px;
	padding: 0px;
	font-size: 14px;
	font-family: sans-serif;
	font-weight: 600;
	max-width: 100%;
	color: ${props => (props.isHighlight ? 'red' : 'black')};

	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`

const UsernameInfo = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 100%;
`

const LastMessage = styled.span`
	margin: 0px;
	padding: 0px;
	font-size: 12px;
	font-family: sans-serif;
	font-weight: 100;
	text-overflow: ellipsis;
	white-space:nowrap;
	overflow:hidden;
`

const MessageWrapper = styled.div`
	display:flex;
	flex-grow:1;
`