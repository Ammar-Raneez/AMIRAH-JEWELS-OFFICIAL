import styled from 'styled-components';

export const Imitations = () => {
	return (
		<Container>
			<h2>IMITATIONS</h2>
			<p>
				Any gem can be imitated—sometimes by manmade materials or by natural materials chosen by man to
				impersonate a particular gem.
			</p>
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
`;
