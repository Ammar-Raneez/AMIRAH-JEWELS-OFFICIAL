import styled from 'styled-components';

export const Imitations = ({ imitationsDetails }) => {
	return (
		<Container>
			<h2>IMITATIONS</h2>
			<p>{imitationsDetails}</p>
		</Container>
	);
}

const Container = styled.div `
	> h2 {
		font-size: 18px;
		margin: 30px 0 8px 0;
	}

	> p {
		font-size: 14px;
		margin: 0 0 30px 0;
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
