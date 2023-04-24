import {useEffect, useState} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography} from '@mui/material';
import { getProductData } from "../api/GetProductData";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from "@mui/system";

const PageProducts = () => {

    const[product, setProduct] = useState({});

    const[faqData, setFaqData] = useState(null);

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }


    useEffect(() => {
        const url = "https://devonp.onpassive.com/wp-json/wl/v1/products/o-trim";
        const url2 = 'https://devonp.onpassive.com/wp-json/wl/v1/products/o-trim/faq';

        getProductData(url).then((data)=>{
            setProduct(data);
        }).catch(err => {
            throw new Error(err);
        });

        getProductData(url2).then(data => {
            if(data && data.faq){
                let faqs = Object.keys(data.faq).map((k)=> data.faq[k]);
                setFaqData(faqs);
            }
            setFaqData(data);
            //console.log(data);
        });

    }, []);
    
    return(
        <Container maxWidth="xl">
            <Box sx={{marginTop: '120px'}}>
                <Grid container>
                    {product.product_content?.map((pc)=> <Grid item xs={12} md={6} key={pc.image}>
                        <Typography variant="h3">{pc.title}</Typography>
                        <Typography variant="p" dangerouslySetInnerHTML={{__html:pc.content}} />
                        </Grid>
                    )}
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        {   
                            faqData && Object.keys(faqData.faq).map(k => {
                                let question = faqData.faq[k]
                                return (
                                    <Accordion key={k} expanded={expanded === 'panel'+k} onChange={handleChange('panel'+k)}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />} id={`panel${k}bh-header`}>
                                            <Typography dangerouslySetInnerHTML={{__html:question.question}} />
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography dangerouslySetInnerHTML={{__html:question.answer}} />
                                        </AccordionDetails>
                                    </Accordion>)
                                })
                        }
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}


export default PageProducts;