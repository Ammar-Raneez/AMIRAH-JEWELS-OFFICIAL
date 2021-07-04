import styled from 'styled-components';

export const WhyWeLoveGemStone = () => {
	return (
		<Container>
			<img src="/amirah-details-latest/KNOW YOUR GEMSTONES/AQUAMARINE.jpg" alt="" height="150" />
			<h1>WHY WE LOVE THIS GEMSTONE</h1>
			<section>
				<div>
					<h2>BEAUTIFUL CRYSTALS</h2>
					<p>
						Aquamarine grows in beautiful six-sided prismatic crystals that on rare occasions can be more
						than a foot long.
					</p>
				</div>
				<div>
					<h2>TRANSPARENCY</h2>
					<p>
						Faceted aquamarine is often exceptionally transparent with vitreous luster, so it really
						sparkles
					</p>
				</div>
				<div>
					<h2>DICHROIC</h2>
					<p>
						Using a dichroscope, you can see aquamarine is near colorless and stronger blue in different
						crystal directions.
					</p>
				</div>
			</section>
		</Container>
	);
};

const Container = styled.div`
	/* border: 1px red solid; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #e5d7c9;

	> h1 {
		width: fit-content;
		border-bottom: 1px solid #db8932;
		border-width: 2px;
		padding: 0 0 4px 0;
	}
	> img {
		object-fit: contain;
		height: 80px;
		position: relative;
		margin-top: -20px;
		margin-bottom: 20px;
	}
	> section {
		display: flex;
		justify-content: space-evenly;
		padding: 60px 30px;
		> div {
			/* border: 1px red solid; */
			margin: 0 30px;
			> h2,
			> p {
				text-align: center;
			}
			> h2 {
				margin-bottom: 20px;
			}
		}
	}
	@media screen and (max-width: 700px) {
		> h1 {
			text-align: center;
			font-size: 1.3rem;
		}
		> section {
			flex-direction: column;
			padding: 20px;

			> div {
				margin: 30px;
				> h2 {
					font-size: 1.2rem;
					margin-bottom: 10px;
				}
			}
		}
	}
`;
