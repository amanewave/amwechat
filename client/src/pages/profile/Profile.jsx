import { cookie } from 'express-validator';
import React, {use} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'
import {$login, setData} from '../../components/modal/FormStore'

export const Profile = () => {
    const navigate = useNavigate()


    const logOutFunc = async() => {
        try {
            let response = await fetch('http://localhost:5500/user/logOut', {
                'method': 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            let result = await response.json()
            setData(null)
        } catch (error) {
            console.log(error);
            
        }
        console.log('logout succes');
        
    }
    return (

        <div>
            profile test
            <LogOutButton onClick={logOutFunc}>Log Out</LogOutButton>
        </div>
    );
};

const LogOutButton = styled.button`

`