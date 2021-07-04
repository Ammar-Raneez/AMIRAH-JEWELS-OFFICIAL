import styled from 'styled-components';

export const AboutGem = () => {
	return (
		<Container>
			<h2>ABOUT AQUAMARINE</h2>
			<img src="/amirah-details-latest/KNOW YOUR GEMSTONES/AQUAMARINE.jpg" alt="" />
			<p>
				Aquamarine’s name comes from the Latin for seawater and it was said to calm waves and keep sailors safe
				at sea. March’s birthstone was also thought to enhance the happiness of marriages.
			</p>
			<p>
				The best gems combine high clarity with limpid transparency and blue to slightly greenish blue hues.
				Like many beryls, aquamarine forms large crystals suitable for sizable fashioned gems and carvings
			</p>
			<hr />
		</Container>
	);
};

const Container = styled.div`
	/* border: 1px red solid; */

	> h2 {
		margin: 8px 0;
	}
	> p {
		margin: 20px 0;
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
		height: 150px;
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
