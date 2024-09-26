import React from 'react';
import styled from 'styled-components'
import Close from '../../assets/close.svg'
import { StyledInput } from '../input/StyledInput';
import { ModalText } from './ModalText';
import { Button } from '../button/Button';


export const Modal = ({active, setActive}) => { 
    return (
			<ModalWrapper onClick={()=>{setActive(false)}}>
				<ModalContent onClick={e => e.stopPropagation()}>
					<StyledClose src={Close} onClick={()=>setActive(false)} />
					<ModalText>Введите логин</ModalText>
					<StyledInput placeholder={'enter login'} width={'60%'} />
					<ModalText>Введите пароль</ModalText>
					<StyledInput placeholder={'enter password'} width={'60%'} />
					<StyledButton width={'50%'} value={'Войти'} fz={'20px'}/>
				</ModalContent>
			</ModalWrapper>
		)
};

const StyledButton = styled(Button)`
`


const ModalWrapper = styled.div`
    height:100vh;
	width:100vw;
	background-color: rgba(0,0,0,.4);
	position:fixed;
	top:0;
	left:0;
	display:flex;
	align-items:center;
	justify-content:center;
`   

const ModalContent = styled.div`
	width:30%;
	background-color:white;
	padding:50px 20px;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	border-radius:15px;
	position:relative;
`

const StyledClose = styled.img`
	position: absolute;
	right: 20px;
	top: 20px;
	width: 20px;
	&:hover {
		scale:1.2;
		cursor: pointer;
	}
`