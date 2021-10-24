import styled from 'styled-components';

export const AboutGem = ({ aboutName, aboutDescriptionArray, aboutImage }) => {
	return (
		<Container>
			<h2>ABOUT {aboutName}</h2>
			<img src={aboutImage} alt="" />
			{aboutDescriptionArray.map((para) => (
				<p>{para}</p>
			))}
			<hr />
		</Container>
	);
}

const Container = styled.div `
	> h2 {
		margin: 8px 0;
		font-size: 18px;
	}

	> p {
		margin: 20px 0;
		font-size: 14px;
	}

	> hr {
		width: 60%;
		border-width: 5px;
		border-bottom: none;
		border-right: none;
		border-left: none;
		border-color: #db8932;
	}

	> img {
		object-fit: contain;
		height: 170px;
	}

	@media screen and (max-width: 600px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		> h2 {
			font-size: 1.2rem;
			text-align: center;
		}

		> p {
			text-align: center;
		}
	}
`;
