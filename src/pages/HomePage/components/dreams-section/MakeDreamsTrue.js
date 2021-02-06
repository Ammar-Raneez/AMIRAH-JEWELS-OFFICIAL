import { Fade, Slide } from 'react-awesome-reveal';
import './MakeDreamsTrue.css';

function MakeDreamsTrue() {
	return (
		<div className="homePage__makeDreamsTrue">
			{/* title */}
			<Fade>
				<h1>MAKE YOUR DREAMS COME TRUE.</h1>
			</Fade>

			{/* top ring section */}
			<div className="homePage__makeDreamsTrue__top">
				<div className="homePage__makeDreamsTrue__topPurchase">
					<Slide>
						<h1>Solitaire Ring</h1>
						<p>Yellow</p>
						<button>PURCHASE</button>
					</Slide>
				</div>

				<img src="homepage-dreams/PINK SAPPHIRE RING 2.png" className="homePage__makeDreamsTrue__topImage" alt="" />
				<div className="homePage__makeDreamsTrue__topPrices">
					<Slide direction="right">
						<h1>PRICE</h1>
						<h2>US$4,500</h2>
					</Slide>
				</div>
			</div>

			{/* middle ring section */}
			<div className="homePage__makeDreamsTrue__middle">
				<div className="homePage__makeDreamsTrue__middleText">
					<Slide>
						<p className="homePage__makeDreamsTrue__middleTextFirst">
							Sapphire engagement rings have increasingly been the choice for brides looking for more economical,
							personal, and unique choices.
						</p>
						<p className="homePage__makeDreamsTrue__middleTextSecond">
							Choose your own colored gemstone that is the epitome of something unique and personal to you.
						</p>
					</Slide>
				</div>
				{/* <Slide direction="right"> */}
					<img className="homePage__makeDreamsTrue__middle__image" src="homepage-dreams/PINK SAPPHIRE RING.png" alt="" />
				{/* </Slide> */}
			</div>

			{/* bottom ring section */}
			<div className="homePage__makeDreamsTrue__bottom">
				<Fade>
					<p>Technical information</p>
				</Fade>

				<div className="homePage__makeDreamsTrue__bottomImageDetail">
					<div className="homePage__makeDreamsTrue__bottomImageDetailFirst">
						<div className="homePage__makeDreamsTrue__bottomImageDetailFirstHeight">
							<Slide>
								<p>HEIGHT</p>
								<p>25.1 mm</p>
							</Slide>
						</div>
						<div className="homePage__makeDreamsTrue__bottomImageDetailFirstWidth">
							<Slide>
								<p>WIDTH</p>
								<p>21.5 mm</p>
							</Slide>
						</div>
						<div className="homePage__makeDreamsTrue__bottomImageDetailFirstThickness">
							<Slide>
								<p>THICKNESS</p>
								<p>1.7 mm</p>
							</Slide>
						</div>
					</div>
					<img src="homepage-dreams/PINK SAPPHIRE RING 3.png"  alt="" />
					<div className="homePage__makeDreamsTrue__bottomImageDetailSecond">
						<div className="homePage__makeDreamsTrue__bottomImageDetailFirstWeight">
							<Slide direction="right">
								<p>WEIGHT</p>
								<p>1.292 get</p>
							</Slide>
						</div>
						<div className="homePage__makeDreamsTrue__bottomImageDetailFirstMetalWeight">
							<Slide direction="right">
								<p>METAL WEIGHT</p>
								<p>2.77 gm</p>
							</Slide>
						</div>
						<div className="homePage__makeDreamsTrue__bottomImageDetailFirstPurity">
							<Slide direction="right">
								<p>PURITY</p>
								<p>18 gk</p>
							</Slide>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MakeDreamsTrue;
