import { Fade } from 'react-awesome-reveal'
import OtherProducts from './other-products/OtherProducts';
import { ringData } from './ringData';
import './RingsPageMain.css'

const RingsPageMain = () => {
	return (
		<div>
			<div class="rings-page-main__banner">
				<img src="banners/RINGS.jpg" width="100%" alt="rings-banner" />
			</div>
			<div className="rings-page-main__rings">
				<Fade cascade>
					<div>
						{ringData.map((ring) => (
							<OtherProducts img={ring.images[0]} name={ring.title} viewMoreUrl={`/rings/` + ring.id} />
						))}
					</div>
				</Fade>
			</div>
		</div>
	);
};

export default RingsPageMain
