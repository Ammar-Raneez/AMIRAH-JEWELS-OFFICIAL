import styled from 'styled-components';

export const Treatments = ({ treatmentsDetails }) => {
	return (
		<Container>
			<h2>TREATMENTS</h2>
			<p>{treatmentsDetails}</p>
			<hr />
		</Container>
	);
}

const Container = styled.div `
	> h2 {
		margin: 30px 0 8px 0;
		font-size: 18px;
	}

	> p {
		margin: 0 0 30px 0;
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
