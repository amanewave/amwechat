import React, { useState } from 'react';
import styled from 'styled-components'
import SvgLogo from '../../assets/logo.svg'
import { Button } from '../../components/button/Button'
import { Modal } from '../../components/modal/Modal';
import { SearchBar } from '../../components/search/Search';


export const Header = () => {
    const [btnValue, setBtnValue] = useState('Войти')
    const [modalActive , setModalActive] = useState(false)

    return (
			<>
				<GlobalWrapper>
					<Logo src={SvgLogo} />

					<SearchBar />
				</GlobalWrapper>
			</>
		)
};


const GlobalWrapper = styled.div`
	margin: 0;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: #222323;
`

const Logo = styled.img`
    width:70px;
`