import styled from 'styled-components';
import { AboutGem } from './components/AboutGem';
import { BirthStonesAnniversary } from './components/BirthStonesAnniversary';
import { GemStatistics } from './components/GemStatistics';
import { GemTitle } from './components/GemTitle';
import { Imitations } from './components/Imitations';
import { Synthetics } from './components/Synthetics';
import { Treatments } from './components/Treatments';
import { WhyWeLoveGemStone } from './components/WhyWeLoveGemStone';

const GemDetailPage = () => {
	return (
		<Container>
			<section>
				<GemTitle />
			</section>
			<section>
				<main>
					<AboutGem />
					<BirthStonesAnniversary />
					<Treatments />
					<Synthetics />
					<Imitations />
				</main>
				<main>
					<GemStatistics />
				</main>
			</section>
			<section>
				<WhyWeLoveGemStone />
			</section>
		</Container>
	);
};

export default GemDetailPage;

const Container = styled.div`
	font-family: Quattrocento-Regular;
	background-color: #f4ebe2;

	> section {
		:nth-child(2) {
			border: 1px red solid;
			display: flex;
			> main {
				margin: 30px 20px;
				:first-child {
					flex: 0.6;
				}
				:last-child {
					flex: 0.4;
				}
			}
		}
	}
`;
