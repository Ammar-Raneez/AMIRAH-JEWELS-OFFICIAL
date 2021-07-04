import styled from 'styled-components';

export const GemTitle = ({ title, titleText, titleImage }) => {
	return (
		<Container>
			<div>
				<h1>{title}</h1>
				<p>{titleText}</p>
			</div>
			<img src={titleImage} alt="" />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 50px;
	border-bottom: 5px #87541e solid;
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

	@media screen and (max-width: 1000px) {
		> img {
			height: 150px;
		}
	}
	@media screen and (max-width: 600px) {
		> div {
			> h1 {
				font-size: 2rem;
			}
			> h1,
			> p {
				text-align: center;
			}
		}

		> img {
			display: none;
		}
	}
	@media screen and (max-width: 350px) {
		> div {
			> h1 {
				font-size: 1.5rem;
			}
		}
	}
`;
