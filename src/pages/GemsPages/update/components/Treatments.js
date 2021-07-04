import styled from 'styled-components';

export const Treatments = () => {
	return (
		<Container>
			<h2>TREATMENTS</h2>
			<p>
				There are a number of processes used to alter the color, apparent clarity, or improve the durability of
				gems.
			</p>
			<hr />
		</Container>
	);
};

const Container = styled.div`
	/* border: 1px red solid; */

	> h2 {
		margin: 30px 0 8px 0;
	}
	> p {
		margin: 0 0 30px 0;
	}

	> hr {
		width: 60%;
		border-width: 5px;
		border-bottom: none;

		border-right: none;
		border-left: none;
		border-color: #db8932;
	}
`;
