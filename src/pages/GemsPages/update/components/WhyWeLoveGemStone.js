import styled from 'styled-components';

export const WhyWeLoveGemStone = ({ whyWeLoveGemStone }) => {
	return (
		<Container>
			<img src={whyWeLoveGemStone.img} alt="" />
			<h1>WHY WE LOVE THIS GEMSTONE</h1>
			<section>
				{whyWeLoveGemStone.data.map((data) => (
					<div>
						<h2>{data.title}</h2>
						<p>{data.description}</p>
					</div>
				))}
			</section>
		</Container>
	);
};

const Container = styled.div `
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
		height: 10rem;
		position: relative;
		margin-top: -4%;
	}

	> section {
		display: flex;
		justify-content: space-evenly;
		padding: 60px 30px;

		> div {
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
