import Banner from "../components/Banner";
import { Grid } from "@mui/material";
import Product from "../components/Product";

const productList = [
    {name: 'O-Connect', content: "Connecting the world in an Instant!"},
    {name: 'O-Trim', content: "Automate your organization's administrative and recruitment process"},
    {name: 'O-Net', content: "Transform the way you do business with world's leading brands"}
]

const Products = () =>{
    
    return(
        <>
            <Banner title="Producs"
                    content="Modernize business processes with scalable AI Products"
                    bannerImg="/images/products/banner-bg.png" />
            <Grid 
            container
            justifyContent="center" >
                
                    {
                        productList.map((product) => {
                            return(
                                <Grid item xs={3} key={product.name}>
                                    <Product name={product.name}
                                            content={product.content}
                                            path={'/products/'+product.name.toLowerCase()} />
                                </Grid>
                            )
                        })
                    }
            </Grid>
        </>
    )
}

export default Products;