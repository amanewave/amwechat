import React, { useState } from 'react';
import styled from 'styled-components';
import { ChatList } from '../../components/chats/ChatList';
import { Chat } from '../../components/chats/Chat';
import { useUnit } from 'effector-react'
import { $activeChat } from './model.js'


export const Main = () => {

    console.log(useUnit($activeChat))

     
    const [activeChat, setActiveChat] = useState('')
    return (
        <Wrapper>
            <ChatList setActiveChat={setActiveChat}  />
            <Chat chatWith={activeChat} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display:flex;
`  