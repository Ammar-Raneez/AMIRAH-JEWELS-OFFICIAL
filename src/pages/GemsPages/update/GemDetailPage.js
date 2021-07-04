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
					{/* flex 0.6 */}
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
				{/* flex 0.4 */}
				<WhyWeLoveGemStone />
			</section>
		</Container>
	);
};

export default GemDetailPage;

const Container = styled.div`
	font-family: Quattrocento-Regular;

	> section {
		:nth-child(2) {
			border: 1px red solid;
			display: flex;
			> main {
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
