import { useHistory } from 'react-router';
import styled from 'styled-components';

export const GemTitle = ({ title, titleText, titleImage }) => {
  const history = useHistory();

  return (
    <Container>
      <div>
        <h1>{title.toUpperCase()}</h1>
        <p>{titleText}</p>
        <div>
          <button onClick={() => history.push("/gems/order")}>
            PLACE AN ORDER
          </button>
        </div>
      </div>
      <img src={titleImage} alt="" />
    </Container>
  );
}

const Container = styled.div `
  display: flex;
  justify-content: space-between;
  padding: 50px;
  border-bottom: 5px #87541e solid;
  background-color: #f4ebe2;

  > img {
    object-fit: contain;
    height: 200px;
  }

  > div {
    > h1 {
      font-size: 3rem;
      font-family: Ginebra_font;
    }

    > p {
      font-size: 14px;
      margin-top: 5px;
    }

    > div {
      border: 2px solid #d4765e;
      width: fit-content;
      height: fit-content;
      border-radius: 5pc;
      margin-top: 1pc;
      padding: 0.3pc;

      > button {
        background-color: #d4765e;
        padding: 0.8pc 1.2pc;
        color: white;
        outline: none;
        font-family: santral;
        cursor: pointer;
        font-size: 14px;
        border: 2px solid #d4765e;
        border-radius: 5pc;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    > img {
      height: 150px;
    }
  }

  @media screen and (max-width: 600px) {
    > div {
      > h1 {
        font-size: 2rem;
      }

      > h1,
      > p {
        text-align: center;
      }
    }

    > img {
      display: none;
    }
  }

  @media screen and (max-width: 350px) {
    > div {
      > h1 {
        font-size: 1.5rem;
      }
    }
  }
`;
