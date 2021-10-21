import { Paper } from '@material-ui/core';
import './OtherProducts.css';

function OtherProducts({ img, name, viewMoreUrl }) {
	const extraClassName = name.indexOf(' ') > 0 ? 'smallerFont' : '';

	return (
		<Paper className={"product " + extraClassName}>
			<a href={viewMoreUrl}>
				<img src={img} alt="" />
				<p>{name.toUpperCase()}</p>
			</a>
		</Paper>
	);
};

export default OtherProducts
