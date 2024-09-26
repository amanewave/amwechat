import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../../assets/search.svg'

export const SearchBar = () => {
    return (
        <Wrapper>
            <StyledInput placeholder='find users'   />
            <StyledSearchLohgo src={SearchIcon}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
display:flex;
`

const StyledInput = styled.input`
    padding:10px 20px;
    font-size:22px;
    border-top-left-radius:20px;
    border-bottom-left-radius:20px;
`

const StyledSearchLohgo = styled.img`
    width:40px;
`