import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';

export const WhyWeLoveGemStone = ({ whyWeLoveGemStone }) => {
	return (
		<Container>
			<Fade direction="down" cascade triggerOnce>
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
			</Fade>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #e5d7c9;

	> div > h1 {
		width: fit-content;
		border-bottom: 1px solid #db8932;
		border-width: 2px;
		padding: 0 0 4px 0;
	}

	> div > img {
		object-fit: contain;
		height: 10rem;
		position: relative;
		margin-top: -4%;
	}

	> div > section {
		display: flex;
		justify-content: space-evenly;
		padding: 60px 0;

		> div {
			flex: 1;
			margin: 0 30px;

			> h2,
			> p {
				text-align: center;
			}

			> p {
				font-size: 14px;
			}

			> h2 {
				margin-bottom: 20px;
				font-size: 18px;
			}
		}
	}

	@media screen and (max-width: 700px) {
		> div > h1 {
			text-align: center;
			font-size: 1.3rem;
		}

		> div > section {
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
