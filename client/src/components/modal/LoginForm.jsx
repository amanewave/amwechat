import React from 'react';
import styled from 'styled-components';
import { StyledInput } from '../input/StyledInput'
import { ModalText } from './ModalText'
import { Button } from '../button/Button'

export const LoginForm = () => {

	

    return (
        <ModalWrapper>
				<ModalContent onClick={e => e.stopPropagation()}>
					
				    <ModalText>Введите логин</ModalText>
			    	<StyledInput placeholder={'enter login'} width={'60%'} />
			    	<ModalText>Введите пароль</ModalText>
			    	<StyledInput placeholder={'enter password'} width={'60%'} />
			    	<StyledButton width={'50%'} value={'Войти'} fz={'20px'} />
					
				</ModalContent>
			</ModalWrapper>
		)
};

const StyledButton = styled(Button)``

const ModalWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.4);
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`

const ModalContent = styled.div`
	width: 30%;
	background-color: white;
	padding: 50px 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	position: relative;
`