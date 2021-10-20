import styled from "styled-components";
import { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { COLOR_SAPPHIRE } from "../colorSapphire";
import ColorGemItem from "./ColorGemItem";

const GemOrderBody = () => {
  let cuts = ["HEART", "OVAL", "PEAR", "ROUND", "SQUARE", "TRIANGLE"];
  const [selectedCut, setSelectedCut] = useState(cuts[0]);
  let carat = ["0.25", "0.5", "0.75", "1", "1.25", "1.5", "1.75", "2"];
  const [selectedCarat, setSelectedCarat] = useState(carat[0]);

  return (
    <Container>
      <section className="section__colors">
        <h2>1.THE COLOR</h2>
        <div>
          {COLOR_SAPPHIRE.map((item, index) => (
            <ColorGemItem img={item.imgPath} name={item.name} key={index} />
          ))}
        </div>
      </section>
      <section className="section__dropdowns">
        <div>
          <h2>2.THE CUT</h2>
          <Dropdown
            className="dropdown"
            options={cuts}
            onChange={(e) => setSelectedCut(e.value)}
            value={selectedCut}
            placeholder="Select Cut Type"
          />
        </div>
        <div>
          <h2>3.CARAT</h2>
          <Dropdown
            className="dropdown"
            options={carat}
            onChange={(e) => setSelectedCarat(e.value)}
            value={selectedCarat}
            placeholder="Select Carat Type"
          />
        </div>
      </section>
      <section className="section__quantity">
        <h2>4. QUANTITY</h2>
        <input type="text" placeholder="Nos" />
      </section>
      <section className="section__textField">
        <p>If you don't find what your looking for, please do tell us</p>
        <textarea cols="30" rows="10"></textarea>
      </section>
      <section className="section__sendBtn">
        <button>send my quote</button>
      </section>
    </Container>
  );
};

export default GemOrderBody;

const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5pc 10vw;

  .section__colors {
    width: 100%;

    > div {
      margin-top: 0.5pc;
      display: flex;
      overflow-x: scroll;
    }
  }

  .section__dropdowns {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 2pc 0pc;

    .dropdown {
      margin-top: 0.5pc;
      width: 20vw;
    }
  }

  .section__quantity {
    padding: 2pc 0pc;
    width: 100%;

    input {
      width: 20vw;
      margin-top: 0.5pc;
      font-size: medium;
      padding: 0.5pc 0.5pc;
    }
  }

  .section__textField {
    width: 100%;

    > p {
      font-size: medium;
      font-weight: bold;
      text-transform: uppercase;
    }

    > textarea {
      width: 100%;
      margin-top: 0.5pc;
      resize: none;
    }
  }

  .section__sendBtn {
    border: 2px solid #d35f46;
    width: fit-content;
    height: fit-content;
    border-radius: 5pc;
    margin-top: 2pc;
    padding: 0.3pc;

    > button {
      background-color: #d35f46;
      padding: 0.8pc 1.2pc;
      text-transform: uppercase;
      color: white;
      outline: none;
      font-family: Santral;
      cursor: pointer;
      font-size: medium;
      border: 2px solid #d35f46;
      border-radius: 5pc;
    }
  }
`;
