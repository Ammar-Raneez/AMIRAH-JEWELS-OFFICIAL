import styled from 'styled-components';
import { GemStatisticsFact } from './GemStatisticsFact';

export const GemStatistics = ({ moreDetails, factsInformation }) => {
	return (
		<Container>
			<section>
				{moreDetails.map((data) => (
					<div>
						<h2>{data.title}</h2>
						<p>{data.description}</p>
					</div>
				))}
			</section>
			<section>
				<h2>FACTS</h2>
				<div>
					<GemStatisticsFact factKey="MINERAL" factValue={factsInformation.mineral} />
					<GemStatisticsFact factKey="CHEMISTRY" factValue={factsInformation.chemistry} />
					<GemStatisticsFact factKey="COLOR" factValue={factsInformation.color} />
					<GemStatisticsFact factKey="REFRACTIVE INDEX" factValue={factsInformation.refractiveIndex} />
					<GemStatisticsFact factKey="SPECIFIC GRAVITY" factValue={factsInformation.specificGravity} />
					<GemStatisticsFact factKey="MOHS HARDNESS" factValue={factsInformation.mohsHardness} />
					<GemStatisticsFact factKey="BIREFRINGENCE" factValue={factsInformation.birefringence} />
				</div>
			</section>
		</Container>
	);
};

const Container = styled.div `
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
