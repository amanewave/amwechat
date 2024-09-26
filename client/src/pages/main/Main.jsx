import React from 'react';
import styled from 'styled-components';
import { ChatList } from '../../components/chats/ChatList';
import { Chat } from '../../components/chats/Chat';

export const Main = () => {
    return (
        <Wrapper>
            <ChatList/>
            <Chat/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display:flex;
    margin-top:20px;
`  