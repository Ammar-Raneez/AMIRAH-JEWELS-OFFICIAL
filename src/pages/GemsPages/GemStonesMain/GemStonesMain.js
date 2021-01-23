import './GemStonesMain.css';

function GemStonesMain() {
	return (
		<div className="gemStonesMain">

			<div className="gemStonesMain__details">
				<div className="gemStonesMain__detailsFirst">
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
                        <button>VIEW PRODUCTS</button>
                        <button>CALL US</button>
                    </div>
				</div>
				<div className="gemStonesMain__detailsSecond">
                    <img src="https://images-aka.kay.com/kay/gemstone/blue-gems/blue-stone-names.jpg" alt=""/>
                </div>
			</div>

			<div className="gemStonesMain__otherGems">
				<div className="gemStonesMain__otherGemsRowOne"></div>
				<div className="gemStonesMain__otherGemsRowOne"></div>
				<div className="gemStonesMain__otherGemsRowOne"></div>
				<div className="gemStonesMain__otherGemsRowOne"></div>
			</div>
		</div>
	);
}

export default GemStonesMain;
