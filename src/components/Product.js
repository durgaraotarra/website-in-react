import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import  Box  from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';


const ProductBox = styled(Box)`
    height: 150px,
    width: 100%,
    border-color: #ff0000,
    border-radius: 10px,
    color: #7D7E84;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.25s ease-in-out;
    `;

const Product = ({name,icon,banner,path}) =>{
    return(
        <ProductBox>
            <img src={icon} />
            <img src={banner} />
            <Typography>{name}</Typography>
            <Typography>
                <Link to={path}>Read More</Link>
            </Typography>
        </ProductBox>
    )
}

Product.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.string,
    banner: PropTypes.string
}
export default Product;