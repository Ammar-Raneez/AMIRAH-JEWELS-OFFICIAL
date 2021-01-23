import { useHistory } from 'react-router-dom';
import './Gem.css';

function Gem({ img, name, viewMoreUrl }) {
	const history = useHistory();

	return (
		<div className="gem">
			<img src={img} alt="" />
			<p>{name}</p>
			<button onClick={() => history.push(viewMoreUrl)}>VIEW MORE</button>
		</div>
	);
}

export default Gem;
