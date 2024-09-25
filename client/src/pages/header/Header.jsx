import React, { Children, useState } from 'react';
import styled from 'styled-components'
import SvgLogo from '../../assets/logo.svg'
import { Button } from '../../components/button/Button'
import { Modal } from '../../components/modal/Modal';

export const Header = () => {
    const[btnValue, setBtnValue] = useState('Войти')
    const [modalActive , setModalActive] = useState(false)

    return (
        <>
        <GlobalWrapper>
            <Logo src={SvgLogo}/>

            <Button value={btnValue} width={'100px'} onClick={()=>setModalActive(true)} />
            {modalActive && <Modal setActive={setModalActive} />}

        </GlobalWrapper>
        </>
    );
};

const MainHeader = styled.h1`
       
`

const GlobalWrapper = styled.div`
    margin:0;
    height:8vh;
    display:flex;
    align-items:center;
`

const Logo = styled.img`
    width:70px;
`