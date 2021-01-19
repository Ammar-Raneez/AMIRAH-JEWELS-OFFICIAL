import './MakeDreamsTrue.css';

function MakeDreamsTrue() {
	return (
		<div className="makeDreamsTrue">
			{/* title */}
			<h1>MAKE YOUR DREAMS COME TRUE.</h1>

			{/* top ring section */}
			<div className="makeDreamsTrue__top">
				<div className="makeDreamsTrue__topPurchase">
					<h1>Solitaire Ring</h1>
					<p>Yellow</p>
					<button>PURCHASE</button>
				</div>

				<img src="PINK SAPPHIRE RING 2.png" className="makeDreamsTrue__topImage" alt="" />
				<div className="makeDreamsTrue__topPrices">
					<h1>PRICE</h1>
					<h2>US$4,500</h2>
				</div>
			</div>

			{/* middle ring section */}
			<div className="makeDreamsTrue__middle">
				<div className="makeDreamsTrue__middleText">
					<p className="makeDreamsTrue__middleTextFirst">
						Sapphire engagement rings have increasingly been the choice for brides looking for more economical,
						personal, and unique choices.
					</p>
					<p className="makeDreamsTrue__middleTextSecond">
						Choose your own colored gemstone that is the epitome of something unique and personal to you.
					</p>
				</div>
				<img className="makeDreamsTrue__middle__image" src="PINK SAPPHIRE RING.png" alt="" />
			</div>

			{/* bottom ring section */}
			<div className="makeDreamsTrue__bottom">
				<p>Technical information</p>

				<div className="makeDreamsTrue__bottomImageDetail">
					<div className="makeDreamsTrue__bottomImageDetailFirst">
						<div className="makeDreamsTrue__bottomImageDetailFirstHeight">
							<p>HEIGHT</p>
							<p>25.1 mm</p>
						</div>
						<div className="makeDreamsTrue__bottomImageDetailFirstWidth">
							<p>WIDTH</p>
							<p>21.5 mm</p>
						</div>
						<div className="makeDreamsTrue__bottomImageDetailFirstThickness">
							<p>THICKNESS</p>
							<p>1.7 mm</p>
						</div>
					</div>
					<img src="PINK SAPPHIRE RING 3.png"  alt="" />
					<div className="makeDreamsTrue__bottomImageDetailSecond">
						<div className="makeDreamsTrue__bottomImageDetailFirstWeight">
							<p>WEIGHT</p>
							<p>1.292 get</p>
						</div>
						<div className="makeDreamsTrue__bottomImageDetailFirstMetalWeight">
							<p>METAL WEIGHT</p>
							<p>2.77 gm</p>
						</div>
						<div className="makeDreamsTrue__bottomImageDetailFirstPurity">
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
