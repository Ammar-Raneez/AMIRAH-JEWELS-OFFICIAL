import styled from 'styled-components';

export const GemStatisticsFact = ({ factKey, factValue }) => {
	return (
		<Container>
			<p>
				<strong>{factKey}: </strong> {factValue}
			</p>
		</Container>
	);
}

const Container = styled.div `
	margin: 30px 0;

	> p {
		font-size: 14px;
		text-align: center;
	}
`;
