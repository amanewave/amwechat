import React from 'react';
import styled from 'styled-components';
import ProfileIcon from '../../assets/profile.svg'

const messages = {

}

export const Chat = ({chatWith}) => {

    const Chat = (messages) => {

        return (
            'message'
        )
    }


    return (
        <ChatWrapper >
            <ChatInfo>
                <ChatImage src={chatWith.img} />
                <ChatHeader>
                     {chatWith.username}
                </ChatHeader>
            </ChatInfo>

            


        </ChatWrapper>
    );
};

const ChatWrapper = styled.div`
	display: flex;
	flex-direction: column;
    width:calc(100vw - 300px);
    align-items:center;
    margin-top:20px;
`

const ChatInfo = styled.div`
    display:flex;
`

const ChatHeader = styled.h2`
    margin:0px 0px;
	font-size: 25px;
	font-weight: 500;
	font-family: sans-serif;
`

const ChatImage = styled.img`
    width:30px;
    margin-right:30px ;
`