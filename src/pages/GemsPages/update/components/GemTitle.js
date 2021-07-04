import styled from 'styled-components';

export const GemTitle = () => {
	return (
		<Container>
			<div>
				<h1>AQUAMARINE</h1>
				<p>Named after seawater, aquamarine’s fresh watery hue is a cool plunge into a refreshing pool</p>
			</div>
			<img src="/amirah-details-latest/KNOW YOUR GEMSTONES/AQUAMARINE.jpg" alt="" />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	/* border: 1px red solid; */
	justify-content: space-between;
	padding: 50px;
    border-bottom: 5px #87541E solid;
	background-color: #f4ebe2;
	> img {
		object-fit: contain;
		height: 200px;
	}
	> div {
		> h1 {
			font-size: 3rem;
		}
		> p {
			margin-top: 5px;
		}
	}
`;
