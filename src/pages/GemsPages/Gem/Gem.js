import { Paper } from '@material-ui/core';
import './Gem.css';

function Gem({ img, name, viewMoreUrl }) {
	return (
		<Paper className="gem">
			<a href={viewMoreUrl}>
				<img src={img} alt="" />
				<p>{name}</p>
			</a>
		</Paper>
	);
}

export default Gem;
