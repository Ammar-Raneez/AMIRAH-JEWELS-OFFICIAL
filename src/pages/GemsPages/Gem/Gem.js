import './Gem.css';

function Gem({ img, name, viewMoreUrl }) {
	// const history = useHistory();

	return (
		<div className="gem">
			<img src={img} alt="" />
			<p>{name}</p>
			<a href={viewMoreUrl}><button>VIEW MORE</button></a>
		</div>
	);
}

export default Gem;
