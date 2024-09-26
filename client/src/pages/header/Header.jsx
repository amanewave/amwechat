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

					<Button
						value={btnValue}
						width={'100px'}
                        pad={'15px 15px'}
                        fz={'17px'}
						onClick={() => setModalActive(true)}
					/>
					{modalActive && <Modal setActive={setModalActive} />}
				</GlobalWrapper>
			</>
		)
};


const GlobalWrapper = styled.div`
    margin:0;
    height:8vh;
    display:flex;
    align-items:center;
    justify-content:space-around;
`

const Logo = styled.img`
    width:70px;
`