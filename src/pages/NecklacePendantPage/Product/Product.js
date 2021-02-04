import { useHistory } from 'react-router-dom';
import './Product.css'

function Product({ img, name, viewMoreUrl }) {
    // const history = useHistory();

    const extraClassName = name.indexOf(" ") > 0 ? "smallerFont" : "";
    
    return (
        <div className={"product " + extraClassName}>
            <img src={img} alt="" />
			<p>{name}</p>
			<a href={viewMoreUrl}><button>VIEW MORE</button></a>
        </div>
    )
}

export default Product
