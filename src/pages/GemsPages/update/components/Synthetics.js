import styled from 'styled-components';

export const Synthetics = () => {
	return (
		<Container>
			<h2>SYNTHETICS</h2>
			<p>
				Some gemstones have synthetic counterparts that have essentially the same chemical, physical, and
				optical properties, but are grown by man in a laboratory
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
