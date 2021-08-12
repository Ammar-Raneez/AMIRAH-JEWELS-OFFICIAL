import Gem from "../Gem/Gem";
import "./GemStonesMain.css";
import { Fade } from "react-awesome-reveal";
import SEO from "../../../shared/components/SEO/SEO";
import gemData from "../../../gemData.json";

function GemStonesMain() {
  return (
    <div className="gemStonesMain">
      <SEO title="Explore All Gems & Stones" />
      <div className="gemStonesMain__details">
        <div className="gemStonesMain__detailsFirst">
          <Fade triggerOnce direction="left">
            <h1>HIGH QUALITY SAPPHIRE STONES</h1>
            <p>
              We are the best known for the provision of the Highest Quality Sri
              Lankan gemstones and for sourcing specific high quality stones
              upon customers request.
            </p>
            <p>
              We are the leading suppliers of the highest quality rough and
              cut-and-polished gem stones for both locally and internationally
            </p>
            <div className="gemStonesMain__detailsFirstButtons">
              <a href="#gems">
                <button>VIEW PRODUCTS</button>
              </a>
              <a href="/contactus">
                <button>CALL US</button>
              </a>
            </div>
          </Fade>
        </div>
        <div className="gemStonesMain__detailsSecond">
          <Fade triggerOnce direction="right">
            <img
              src="https://images-aka.kay.com/kay/gemstone/blue-gems/blue-stone-names.jpg"
              alt=""
            />
          </Fade>
        </div>
      </div>

      <div id="gems" className="gemStonesMain__otherGems">
        <Fade cascade>
          <div className="gemStonesMain__otherGemsRow">
            {gemData.map(({ title, titleImage, id }, key) => (
              <Gem
                img={titleImage}
                name={title}
                viewMoreUrl={`/gems/${id}`}
                key={key}
              />
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default GemStonesMain;
