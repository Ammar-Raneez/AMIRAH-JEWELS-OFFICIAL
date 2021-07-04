import styled from 'styled-components';

export const BirthStonesAnniversary = () => {
	return (
		<Container>
			<h2>BIRTHSTONES & ANNIVERSARIES</h2>
			<p>Aquamarine is the birthstone for March and the gem of the 19th wedding anniversary.</p>
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
