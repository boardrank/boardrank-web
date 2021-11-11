import useHome from "hooks/useHome";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import palette from "styles/palette";

export interface GenreListPropsType {
  setGenryName: (value: string) => void;
}

const GenreList = ({ setGenryName }: GenreListPropsType) => {
  const { genresState } = useHome();
  const genryList = useRecoilValue(genresState);
  // const [genryLists, setGenryLists] = useState(genryList);
  // const [genryNum, setGenryNum] = useState(0);

  console.log("genryLists", genresState);

  const getGenryLists = async () => {};

  // const onClickGenry = (event, idx) => {
  // setGenryNum(idx);
  // setGenryName(event.target.innerText);
  // };

  return (
    <StyledGenryUl>
      {genryList.map((genry) => (
        <li
          key={genry.id}
          // className={genry.id === genryNum ? "active" : ""}
          // onClick={(event) => onClickGenry(event, idx)}
        >
          {genry.id}
        </li>
      ))}
    </StyledGenryUl>
  );
};

const StyledGenryUl = styled.ul`
  margin-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${palette.grey_5};

  li {
    margin: 0 25px;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    color: #494949;
    padding-bottom: 20px;
    cursor: pointer;
    &.active {
      font-weight: bold;
      color: #272727;
      border-bottom: 2px solid #000;
    }
    &:hover {
      font-weight: bold;
      color: #272727;
      border-bottom: 2px solid #000;
    }
  }
`;

export default GenreList;
