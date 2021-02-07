import Gem from '../Gem/Gem';
import './GemStonesMain.css';
import { Fade } from 'react-awesome-reveal';

function GemStonesMain() {
	return (
		<div className="gemStonesMain">
			<div className="gemStonesMain__details">
				<div className="gemStonesMain__detailsFirst">
					<Fade triggerOnce direction="left">
						<h1>HIGH QUALITY SAPPHIRE STONES</h1>
						<p>
							We are the best known for the provision of the Highest Quality Sri Lankan gemstones and for sourcing
							specific high quality stones upon customers request.
						</p>
						<p>
							We are the leading suppliers of the highest quality rough and cut-and-polished gem stones for both locally
							and internationally
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
						<img src="https://images-aka.kay.com/kay/gemstone/blue-gems/blue-stone-names.jpg" alt="" />
					</Fade>
				</div>
			</div>

			<div id="gems" className="gemStonesMain__otherGems">
				<Fade cascade>
					<div className="gemStonesMain__otherGemsRow">
						<Gem img="gems/teal-sapphire.png" name="Teal Sapphires" viewMoreUrl="/teal+sapphire" />
						<Gem img="gems/purple-sapphire.png" name="Purple Sapphires" viewMoreUrl="/purple-sapphire" />
						<Gem img="gems/Padparadscha-sapphire.png" name="Padparadscha Sapphires" viewMoreUrl="/padparadscha-sapphire" />
						<Gem img="gems/orange-sapphire.png" name="Orange Sapphires" viewMoreUrl="/orange-sapphire" />
					</div>
					<div style={{ justifyContent: 'center' }} className="gemStonesMain__otherGemsRow">
						<Gem img="gems/ClaudiaHamann_PinkSapphire_Ceylon_Cushion_Unheated.png" name="Pink Sapphires" viewMoreUrl="/pink-sapphire" />
						<Gem img="gems/white-sapphire.png" name="White Sapphires" viewMoreUrl="/white+sapphires" />
					</div>
				</Fade>	
			</div>
		</div>
	);
}

export default GemStonesMain;
