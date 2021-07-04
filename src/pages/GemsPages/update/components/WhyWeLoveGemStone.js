import styled from 'styled-components';

export const WhyWeLoveGemStone = () => {
	return (
		<Container>
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
	border: 1px red solid;
	> h1 {
		text-align: center;
	}
	> section {
		display: flex;
		justify-content: space-evenly;
	}
`;
