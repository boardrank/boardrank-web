import useHome from "hooks/useHome";
import styled from "styled-components";
import palette from "styles/palette";

export interface GenreListPropsType {
  setGenreId: (value: number) => void;
  genreId: number;
}

const GenreList = ({ setGenreId, genreId }: GenreListPropsType) => {
  const { genreLists } = useHome({ genreId });

  const onClickGenry = (id: number) => {
    setGenreId(id);
  };

  return (
    <StyledGenryUl>
      {genreLists &&
        genreLists.map((genre) => (
          <li
            key={genre.id}
            className={genre.id === genreId ? "active" : ""}
            onClick={() => onClickGenry(genre.id)}
          >
            {genre.name}
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
