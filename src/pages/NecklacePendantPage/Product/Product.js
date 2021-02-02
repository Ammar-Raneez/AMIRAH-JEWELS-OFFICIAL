import { useHistory } from 'react-router-dom';
import './Product.css'

function Product({ img, name, viewMoreUrl }) {
    const history = useHistory();

    const extraClassName = name.indexOf(" ") > 0 ? "smallerFont" : "";
    
    return (
        <div className={"product " + extraClassName}>
            <img src={img} alt="" />
			<p>{name}</p>
			<button onClick={() => history.push(viewMoreUrl)}>VIEW MORE</button>
        </div>
    )
}

export default Product
