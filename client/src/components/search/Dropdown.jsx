import React, { memo, useState } from "react";
import styled from "styled-components";
import CloseIcon from "../../assets/close.svg";

export const HistoryItem = ({ elem, i, arr, setSearchHistory }) => {
  const [historyElemActive, setHistoryElemActive] = useState(false);

  const removeFromHistory = () => {
    const a = arr.filter((_, ind) => ind !== i);
    setSearchHistory(a);
  };

  return (
    <Item
      onMouseEnter={() => setHistoryElemActive(true)}
      onMouseLeave={() => setHistoryElemActive(false)}
    >
      <ItemWrapper>
        {elem}
        {historyElemActive && (
          <StyledClose src={CloseIcon} onClick={removeFromHistory} />
        )}
      </ItemWrapper>
    </Item>
  );
};

export const Dropdown = memo(({ searchHistory, setSearchHistory }) => {
  const SearchHistoryElem = searchHistory.map((elem, i) => (
    <HistoryItem
      key={Math.random()}
      elem={elem}
      arr={searchHistory}
      setSearchHistory={setSearchHistory}
      i={i}
    />
  ));

  return (
    <Wrapper onClick={() => console.log(1)}>
      <DropdownContent>{SearchHistoryElem}</DropdownContent>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  position: absolute;
  top: 70px;
  outline: 2px solid #aacbcb;
  border-radius: 22px;
  width: 100%;
  background-color: #4d4e4e;
`;

const DropdownContent = styled.div`
  position: relative;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`;

const Item = styled.div`
  font-size: 18px;
  font-family: sans-serif;
  padding: 1px;
  color: white;
  font-weight: 100;
  padding-left: 20px;
  &:hover {
    color: red;
  }
`;

const StyledClose = styled.img`
  width: 20px;
  margin-right: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
