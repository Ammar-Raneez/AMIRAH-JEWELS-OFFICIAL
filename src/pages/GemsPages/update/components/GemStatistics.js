import styled from 'styled-components';
import { GemStatisticsFact } from './GemStatisticsFact';

export const GemStatistics = () => {
	return (
		<Container>
			<section>
				<div>
					<h2>110 KILOS</h2>
					<p>The largest gem-quality aquamarine crystal mined to date is 19 inches long</p>
				</div>
				<div>
					<h2>BERYL</h2>
					<p>Like emerald, aquamarine is a color variety of the mineral beryl</p>
				</div>
				<div>
					<h2>15,000 FEET</h2>
					<p>Aquamarine is mined at high elevations in Pakistan’s Karakoram Mountains</p>
				</div>
			</section>
			<section>
				<h2>FACTS</h2>
				<div>
					<GemStatisticsFact factKey="MINERAL" factValue="Beryl" />
					<GemStatisticsFact factKey="CHEMISTRY" factValue="Be3Al2Si6O18" />
					<GemStatisticsFact factKey="COLOR" factValue="Greenish blue, light in tone" />
					<GemStatisticsFact factKey="REFRACTIVE INDEX" factValue="1.577 to 1.583" />
					<GemStatisticsFact factKey="SPECIFIC GRAVITY" factValue="2.72" />
					<GemStatisticsFact factKey="MOHS HARDNESS" factValue="7.5 to 8.0" />
					<GemStatisticsFact factKey="BIREFRINGENCE" factValue="0.005 to 0.009" />
				</div>
			</section>
		</Container>
	);
};

const Container = styled.div`
	border: 5px #87541e solid;
	background-color: #e8e8e8;
	padding: 30px 10px;
	> section {
		:first-child {
			> div {
				margin-top: 20px;
				margin-bottom: 50px;
				> h2,
				> p {
					text-align: center;
				}
			}
		}
		:last-child {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			> h2 {
				width: fit-content;
				border-bottom: 1px solid #db8932;
				border-width: 2px;
				padding: 0 0 4px 0;
			}
		}
	}
`;
