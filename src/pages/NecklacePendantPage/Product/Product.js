import { Paper } from '@material-ui/core';
import './Product.css'

function Product({ img, name, viewMoreUrl }) {
    // const history = useHistory();

    const extraClassName = name.indexOf(" ") > 0 ? "smallerFont" : "";
    
    return (
        <Paper className={"product " + extraClassName}>
            <a href={viewMoreUrl}>
                <img src={img} alt="" />
                <p>{name}</p>
            </a>
			{/* <a href={viewMoreUrl}><button>VIEW MORE</button></a> */}
        </Paper>
    )
}

export default Product
