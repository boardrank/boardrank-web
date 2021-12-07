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
    <StyledGenry>
      <ul>
        <li
          className={genreId === 0 ? "active" : ""}
          onClick={() => onClickGenry(0)}
          key={0}
        >
          전체
        </li>
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
      </ul>
    </StyledGenry>
  );
};

const StyledGenry = styled.div`
  max-width: 1112px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 0;
  border-bottom: 1px solid ${palette.grey_4};

  ul {
    display: flex;
    justify-content: center;
    li {
      margin: 0 25px;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: ${palette.grey_7};
      padding-bottom: 20px;
      cursor: pointer;
      &.active {
        font-weight: bold;
        color: ${palette.grey_9};
        border-bottom: 2px solid ${palette.grey_9};
      }
      &:hover {
        font-weight: bold;
        color: ${palette.grey_9};
        border-bottom: 2px solid ${palette.grey_9};
      }
    }
  }

  @media ${(props) => props.theme.tablet} {
    margin: 0;
    padding: 28px 24px;
    overflow-x: scroll;
    border-bottom: 1px solid ${palette.grey_2};
    ul {
      width: 760px;
      justify-content: start;
    }
  }
`;

export default GenreList;
