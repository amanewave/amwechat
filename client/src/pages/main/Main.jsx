import React, { useState } from 'react';
import styled from 'styled-components';
import { ChatList } from '../../components/chats/ChatList';
import { Chat } from '../../components/chats/Chat';

export const Main = () => {
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