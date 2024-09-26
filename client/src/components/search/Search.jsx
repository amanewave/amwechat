import React, { useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import SearchIcon from '../../assets/search.svg'
import { Dropdown } from './Dropdown';

export const SearchBar = () => {
	const [dropdownActive, setDropdownActive] = useState(false)
	const wrapperRef = useRef(null)
	
	const clickOutside = e => {
		if(!(wrapperRef.current.contains(e.target))){
			setDropdownActive(false)
		}
	}

	useEffect(()=>{
		document.addEventListener('click',clickOutside)
		return () => {
			document.removeEventListener('click',clickOutside)
		}
	}, [])

    return (
			<Wrapper ref={wrapperRef}>
				<SearchBarWrapper>
					<StyledInput
						width={'300px'}
						placeholder='find users'
						onClick={e => {
							e.stopPropagation()
							setDropdownActive(true)
						}}
					/>
					<StyledSearchLohgo src={SearchIcon} />
				</SearchBarWrapper>
				{dropdownActive && <Dropdown setDropdownActive={setDropdownActive} />}
			</Wrapper>
		)
};

const SearchBarWrapper = styled.div`
	display: flex;
`

const Wrapper = styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
`

const StyledInput = styled.input`
	padding: 10px 20px;
	font-size: 22px;
	border-top-left-radius: 20px;
	border-bottom-left-radius: 20px;
	border: 1px solid black;
	border-right: none;
    &:focus{
        outline:none;
    }
`

const StyledSearchLohgo = styled.img`
	width: 20px;
	padding-right: 20px;
	border: 1px solid black;
	border-left: none;
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
    cursor: pointer;
`