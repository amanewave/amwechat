import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { StyledInput } from '../input/StyledInput'
import { ModalText } from './ModalText'
import { Button } from '../button/Button'
import {$login, setData} from './FormStore'
import { useUnit } from 'effector-react'
import { useNavigate } from 'react-router-dom'


export const LogForm = ({auth, setAuth}) => {
	const store = useUnit($login)

	const navigate = useNavigate()

	useEffect(()=>{
		if (!Object.keys(store).length) return
		navigate('/profile')
	},[store])

	const [formData, setFormData] = useState({
		username: '',
		password: '',
	})

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevState => ({ ...prevState, [name]: value }))
	}

    const isAuth = () => {
			setAuth(true)
		}

	const login = async () => {
		try {
			let response = await fetch('http://localhost:5500/user/login', {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})
			let result = await response.json()
			if(result.success === true) {
				setData(formData)
			}

			console.log(result, 'login')
		} catch (e) {
			console.log(e)
		}

	}



	return (
		<ModalWrapper>
			<ModalContent onClick={e => e.stopPropagation()}>
				<ModalText>Введите логин</ModalText>
				<StyledInput
					name={'username'}
					onChange={handleChange}
					type={'text'}
					placeholder={'enter login'}
					width={'60%'}
				/>
				<ModalText>Введите пароль</ModalText>
				<StyledInput
					name={'password'}
					onChange={handleChange}
					placeholder={'enter password'}
					width={'60%'}
					type={'password'}
				/>
				<StyledButton
					onClick={login}
					disabled={false}
					width={'50%'}
					value={'Войти в аккаунт'}
					fz={'20px'}
				/>
                <A onClick={isAuth}>Нет аккаунта?Зарегестрироваться</A>
			</ModalContent>
		</ModalWrapper>
	)
}

const A = styled.a`
	margin-top: 20px;
	font-family: sans-serif;
	font-weight: 600px;
	color: black;
	cursor: pointer;
	&:hover {
		color: #6da0a0;
	}
`

const StyledButton = styled(Button)`
	&:disabled {
	}
`

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
