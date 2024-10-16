import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import SearchIcon from "../../assets/search.svg";
import { Dropdown } from "./Dropdown";

export const SearchBar = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const wrapperRef = useRef(null);
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  const submitSearch = (e) => {
    if(!e.target.value.trim()){
      return
    }
    if (e.key === "Enter") {
      const value = e.target.value;
      setSearchValue(value);
      e.target.value = "";
      setSearchHistory([value, ...searchHistory]);
    }
  };

  const clickOutside = (e) => {
    if (!wrapperRef.current.contains(e.target)) {
      setDropdownActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, []);




  return (
    <Wrapper ref={wrapperRef} onKeyDown={submitSearch}>
      <SearchBarWrapper>
        <StyledInput
          isDropdownOpen = {dropdownActive}
          width={"300px"}
          placeholder="find users"
          onClick={(e) => {
            e.stopPropagation();
            setDropdownActive(true);
          }}
          onFocus={(e) => setSearchActive(true)}
          onBlur={(e) => setSearchActive(false)}
        />
        <StyledSearchLogo src={SearchIcon} isActive={searchActive} />
      </SearchBarWrapper>
      {searchHistory.length !== 0 && dropdownActive && (
        <Dropdown
          searchHistory={searchHistory}
          setSearchHistory={setSearchHistory}
        />
      )}
    </Wrapper>
  );
};

const SearchBarWrapper = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StyledInput = styled.input`
	padding: 10px 20px;
	font-size: 22px;
	border-top-left-radius: 20px;
	border-bottom-left-radius: 20px;
	border: 1px solid black;
	background-color: #4d4e4e;

	&:focus {
		outline: none;
		color: white;
		border-right: none;
		&::placeholder {
			color: #11f0b0;
		}
	}

	&::placeholder {
		color: white;
		font-family: Arial, Helvetica, sans-serif;
		opacity: 0.5;
	}

	border-right: none;


	${({ isDropdownOpen }) =>
		isDropdownOpen &&
		css`
			outline: none;
			color: white;
			border-right: none;
			&::placeholder {
				color: #11f0b0;
			}
		`}
`

const StyledSearchLogo = styled.img`
  width: 35px;
  padding-right: 10px;
  border:1px solid black;
  border-left: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
  background-color: #4d4e4e;
`;
