import { Paper } from '@material-ui/core';
import './Gem.css';

function Gem({ img, name, viewMoreUrl }) {
	// const history = useHistory();

	return (
		<Paper className="gem">
			<a href={viewMoreUrl}>
				<img src={img} alt="" />
				<p>{name}</p>
			</a>
			{/* <a href={viewMoreUrl}><button>VIEW MORE</button></a> */}
		</Paper>
	);
}

export default Gem;
