import { useHistory } from 'react-router-dom';
import './Product.css'

function Product({ img, name, viewMoreUrl }) {
    const history = useHistory();
    
    return (
        <div className="product">
            <img src={img} alt="" />
			<p>{name}</p>
			<button onClick={() => history.push(viewMoreUrl)}>VIEW MORE</button>
        </div>
    )
}

export default Product
