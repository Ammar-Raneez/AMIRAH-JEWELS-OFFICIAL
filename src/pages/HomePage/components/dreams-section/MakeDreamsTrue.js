import './MakeDreamsTrue.css';

function MakeDreamsTrue() {
	return (
		<div className="homePage__makeDreamsTrue">
			{/* title */}
			<h1>MAKE YOUR DREAMS COME TRUE.</h1>

			{/* top ring section */}
			<div className="homePage__makeDreamsTrue__top">
				<div className="homePage__makeDreamsTrue__topPurchase">
					<h1>Solitaire Ring</h1>
					<p>Yellow</p>
					<button>PURCHASE</button>
				</div>

				<img src="homepage-dreams/PINK SAPPHIRE RING 2.png" className="homePage__makeDreamsTrue__topImage" alt="" />
				<div className="homePage__makeDreamsTrue__topPrices">
					<h1>PRICE</h1>
					<h2>US$4,500</h2>
				</div>
			</div>

			{/* middle ring section */}
			<div className="homePage__makeDreamsTrue__middle">
				<div className="homePage__makeDreamsTrue__middleText">
					<p className="homePage__makeDreamsTrue__middleTextFirst">
						Sapphire engagement rings have increasingly been the choice for brides looking for more economical,
						personal, and unique choices.
					</p>
					<p className="homePage__makeDreamsTrue__middleTextSecond">
						Choose your own colored gemstone that is the epitome of something unique and personal to you.
					</p>
				</div>
				<img className="homePage__makeDreamsTrue__middle__image" src="homepage-dreams/PINK SAPPHIRE RING.png" alt="" />
			</div>

			{/* bottom ring section */}
			<div className="homePage__makeDreamsTrue__bottom">
				<p>Technical information</p>

				<div className="homePage__makeDreamsTrue__bottomImageDetail">
					<div className="homePage__makeDreamsTrue__bottomImageDetailFirst">
						<div className="homePage__makeDreamsTrue__bottomImageDetailFirstHeight">
							<p>HEIGHT</p>
							<p>25.1 mm</p>
						</div>
						<div className="homePage__makeDreamsTrue__bottomImageDetailFirstWidth">
							<p>WIDTH</p>
							<p>21.5 mm</p>
						</div>
						<div className="homePage__makeDreamsTrue__bottomImageDetailFirstThickness">
							<p>THICKNESS</p>
							<p>1.7 mm</p>
						</div>
					</div>
					<img src="homepage-dreams/PINK SAPPHIRE RING 3.png"  alt="" />
					<div className="homePage__makeDreamsTrue__bottomImageDetailSecond">
						<div className="homePage__makeDreamsTrue__bottomImageDetailFirstWeight">
							<p>WEIGHT</p>
							<p>1.292 get</p>
						</div>
						<div className="homePage__makeDreamsTrue__bottomImageDetailFirstMetalWeight">
							<p>METAL WEIGHT</p>
							<p>2.77 gm</p>
						</div>
						<div className="homePage__makeDreamsTrue__bottomImageDetailFirstPurity">
							<p>PURITY</p>
							<p>18 gk</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MakeDreamsTrue;
