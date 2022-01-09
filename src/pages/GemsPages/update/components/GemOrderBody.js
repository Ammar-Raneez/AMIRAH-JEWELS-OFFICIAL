import styled from 'styled-components';
import { useState, useRef } from 'react';
import 'react-dropdown/style.css';
import { COLOR_SAPPHIRE } from '../colorSapphire';
import ColorGemItem from './ColorGemItem';
import emailjs from 'emailjs-com';
import Select from 'react-select';
import { Fade } from 'react-awesome-reveal';
import { useParams } from 'react-router';
import { selectUser } from '../../../../features/userSlice';
import { useSelector } from 'react-redux';

const GemOrderBody = () => {
  const formRef = useRef('form');
  const user = useSelector(selectUser);
  const { id } = useParams();

  let cuts = [
    { value: 'HEART', label: 'HEART' },
    { value: 'OVAL', label: 'OVAL' },
    { value: 'PEAR', label: 'PEAR' },
    { value: 'ROUND', label: 'ROUND' },
    { value: 'SQUARE', label: 'SQUARE' },
    { value: 'TRIANGLE', label: 'TRIANGLE' }
  ];
  const [selectedCut, setSelectedCut] = useState(cuts[0]);
  let carat = [
    { value: '0.25', label: '0.25' },
    { value: '0.5', label: '0.5' },
    { value: '0.75', label: '0.75' },
    { value: '1', label: '1' },
    { value: '1.25', label: '1.25' },
    { value: '1.5', label: '1.5' },
    { value: '1.75', label: '1.75' },
    { value: '2', label: '2' }
  ];
  const [selectedCarat, setSelectedCarat] = useState(carat[0]);
  let sapphire = [
    { value: 'blue sapphire', label: 'blue sapphire' },
    { value: 'green sapphire', label: 'green sapphire' },
    { value: 'pink sapphire', label: 'pink sapphire' },
    { value: 'orange sapphire', label: 'orange sapphire' },
    { value: 'purple sapphire', label: 'purple sapphire' },
    { value: 'teale sapphire', label: 'teale sapphire' },
    { value: 'padparadscha sapphire', label: 'padparadscha sapphire' },
    { value: 'violet sapphire', label: 'violet sapphire' },
    { value: 'yellow sapphire', label: 'yellow sapphire' }
  ]
  const [selectedSapphire, setSelectedSapphire] = useState(sapphire[0]);

  const [qty, setQty] = useState(0);
  const [otherInfo, setOtherInfo] = useState('');

  const sendQuote = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_lvksm7m', 'amirah_sendQuote', e.target, 'user_pxB9WpI7yEgKMxO3A4XCP').then(
      (result) => {
        console.log(result.text);
        setSelectedCut(cuts[0]);
        setSelectedCarat(carat[0]);
        setSelectedSapphire(sapphire[0]);
        setQty(0);
        setOtherInfo('');
      }, (error) => {
        console.log(error.text);
      }
    );
  }

  return (
    <Fade triggerOnce direction="up">
      <Container>
        {id === 'sapphire' && (
          <section className="section__colors">
            <h2>1.THE COLOR</h2>
            <div>
              {COLOR_SAPPHIRE.map((item, index) => (
                <ColorGemItem
                  setSapphireColor={setSelectedSapphire}
                  sapphireColor={sapphire[index]}
                  selectedSapphire={selectedSapphire}
                  img={item.imgPath}
                  name={item.name}
                  key={index}
                />
              ))}
            </div>
          </section>
        )}
        <form style={{ width: '100%' }} onSubmit={sendQuote} ref={formRef}>
          <input name="from_name" value={user?.email} style={{ display: 'none' }} />
          {id === 'sapphire' && (
            <Select
              options={sapphire}
              name="selected_colour"
              onChange={(e) => setSelectedSapphire(e)}
              value={selectedSapphire}
              placeholder="Select Sapphire Colour"
              className="gemOrder__hideSapColor"
            />
          )}
          <section className="section__dropdowns">
            <div>
              <h2>2.THE CUT</h2>
              <Select
                className="dropdown"
                options={cuts}
                name="selected_cut"
                onChange={(e) => setSelectedCut(e)}
                value={selectedCut}
                placeholder="Select Cut Type"
              />
            </div>
            <div>
              <h2>3.CARAT</h2>
              <Select
                className="dropdown"
                options={carat}
                name="selected_carat"
                onChange={(e) => setSelectedCarat(e)}
                value={selectedCarat}
                placeholder="Select Carat Type"
              />
            </div>
          </section>
          <section className="section__quantity">
            <h2>4. QUANTITY</h2>
            <input
              value={qty}
              onChange={e => setQty(e.target.value)}
              type="text"
              name="selected_qty"
              placeholder="Nos"
            />
          </section>
          <section className="section__textField">
            <p>If you don't find what your looking for, please do tell us</p>
            <textarea
              value={otherInfo}
              name="message"
              onChange={e => setOtherInfo(e.target.value)}
              cols="30"
              rows="10"
            />
          </section>
          {user ? (
            <div className="section__sendBtnContainer">
              <section className="section__sendBtn">
                <button type="submit">send my quote</button>
              </section>
            </div>
          ) : (
            <p
              style={{
                textAlign: 'center',
                marginTop: '15px',
                color: '#87541e'
              }}
            >
              <strong>Please login To Request A Quote</strong>
            </p>
          )}
        </form>
      </Container>
    </Fade>
  );
}

export default GemOrderBody;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5pc 10vw;

  .gemOrder__hideSapColor {
    display: none;
  }

  .section__colors {
    width: 100%;

    > div {
      margin-top: 0.5pc;
      display: flex;
      overflow-x: scroll;

      ::-webkit-scrollbar {
        height: 8px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1; 
      }
      
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: rgb(211, 95, 70); 
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: rgb(211, 95, 70); 
      }
    }
  }

  .section__dropdowns {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 2pc 0pc;

    .dropdown {
      margin-top: 0.5pc;
      width: 21.5vw;
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
      outline: none;
    }
  }

  .section__textField {
    width: 100%;

    > p {
      font-size: small;
      font-weight: bold;
      text-transform: uppercase;
    }

    > textarea {
      width: 100%;
      margin-top: 0.5pc;
      resize: none;
      outline: none;
      padding: 0.5pc;
    }
  }

  .section__sendBtnContainer {
    display: flex;
    justify-content: center;
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
      font-family: santral;
      cursor: pointer;
      font-size: 14px;
      border: 2px solid #d35f46;
      border-radius: 5pc;
    }
  }

  @media screen and (max-width: 600px) {
    .section__dropdowns {
      flex-direction: column;

      .dropdown {
        width: 100%;
        margin-bottom: 2rem;
      }
    }

    .section__quantity {
      input {
        width: 95% !important;
      }
    }

    .section__textField {
      width: 96% !important;
    }
  }
`;
