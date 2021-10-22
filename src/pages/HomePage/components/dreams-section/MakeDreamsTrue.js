import { Fade, Slide } from 'react-awesome-reveal';
import './MakeDreamsTrue.css';
import formatCurrency from 'format-currency';
import { useSelector } from 'react-redux';
import { selectCurrencySymbol } from '../../../../features/currencySymbolSlice';
import { selectCurrencyRate } from '../../../../features/currencyRateSlice';

function MakeDreamsTrue() {
	const currencySymbol = useSelector(selectCurrencySymbol);
	const currencyRate = useSelector(selectCurrencyRate);

	return (
		<div className="homePage__makeDreamsTrue">
			{/* title */}
			<Fade triggerOnce>
				<h1>MAKE YOUR DREAMS COME TRUE.</h1>
			</Fade>

			{/* top ring section */}
			<div className="homePage__makeDreamsTrue__top">
				<div className="homePage__makeDreamsTrue__topPurchase">
					<Slide triggerOnce>
						<h1>PURPLE PINK WONDER SOLITAIRE RING</h1>
						<button>Buy Now</button>
					</Slide>
				</div>

				<Fade triggerOnce>
					<img
						src="home/dreams/PINK SAPPHIRE RING 2.png"
						className="homePage__makeDreamsTrue__topImage"
						alt=""
					/>
				</Fade>
				<div className="homePage__makeDreamsTrue__topPrices">
					<Slide direction="right" triggerOnce>
						<h1>PRICE</h1>
						<h2>{currencySymbol} {formatCurrency(Math.round(4500 * currencyRate * 100) / 100)}</h2>
					</Slide>
				</div>
			</div>

			{/* middle ring section */}
			<div className="homePage__makeDreamsTrue__middle">
				<div className="homePage__makeDreamsTrue__middleText">
					<Slide triggerOnce>
						<p className="homePage__makeDreamsTrue__middleTextFirst">
							Sapphire engagement rings have increasingly been the choice for brides looking for more
							economical, personal, and unique choices.
						</p>
						<p className="homePage__makeDreamsTrue__middleTextSecond">
							Choose your own colored gemstone that is the epitome of something unique and personal to
							you.
						</p>
					</Slide>
				</div>
				<Fade triggerOnce>
					<img
						className="homePage__makeDreamsTrue__middle__image"
						src="home/dreams/PINK SAPPHIRE RING.png"
						alt=""
					/>
				</Fade>
			</div>

			{/* bottom ring section */}
			<div className="homePage__makeDreamsTrue__bottom">
				<Fade triggerOnce>
					<p>TECHNICAL INFORMATION</p>
				</Fade>

				<div className="homePage__makeDreamsTrue__bottomImageDetail">
					<div className="homePage__makeDreamsTrue__bottomImageDetailFirst">
						<div className="homePage__makeDreamsTrue__bottomImageDetailFirstHeight">
							<Slide triggerOnce>
								<p>HEIGHT</p>
								<p>25.1 mm</p>
							</Slide>
						</div>
						<div className="homePage__makeDreamsTrue__bottomImageDetailFirstWidth">
							<Slide triggerOnce>
								<p>WIDTH</p>
								<p>21.5 mm</p>
							</Slide>
						</div>
						<div className="homePage__makeDreamsTrue__bottomImageDetailFirstThickness">
							<Slide triggerOnce>
								<p>THICKNESS</p>
								<p>1.7 mm</p>
							</Slide>
						</div>
					</div>
					<Fade triggerOnce>
						<img src="home/dreams/PINK SAPPHIRE RING 3.png" alt="" />
					</Fade>
					<div className="homePage__makeDreamsTrue__bottomImageDetailSecond">
						<div className="homePage__makeDreamsTrue__bottomImageDetailFirstWeight">
							<Slide direction="right" triggerOnce>
								<p>WEIGHT</p>
								<p>1.292 get</p>
							</Slide>
						</div>
						<div className="homePage__makeDreamsTrue__bottomImageDetailFirstMetalWeight">
							<Slide direction="right" triggerOnce>
								<p>METAL WEIGHT</p>
								<p>2.77 gm</p>
							</Slide>
						</div>
						<div className="homePage__makeDreamsTrue__bottomImageDetailFirstPurity">
							<Slide direction="right" triggerOnce>
								<p>PURITY</p>
								<p>18 gk</p>
							</Slide>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MakeDreamsTrue;
