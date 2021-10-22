import { Paper } from '@material-ui/core';
import './Product.css';

function Product({ img, name, viewMoreUrl }) {
	const extraClassName = name.indexOf(' ') > 0 ? 'smallerFont' : '';

	return (
		<Paper className={"product " + extraClassName}>
			<a href={viewMoreUrl}>
				<img src={img} alt="" />
				<p>{name.toUpperCase()}</p>
			</a>
		</Paper>
	);
}

export default Product
