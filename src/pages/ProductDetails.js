import Typography from '@mui/material/Typography';
import  Box  from '@mui/material/Box';
import  Container  from '@mui/material/Container';
import  Grid  from '@mui/material/Grid';
import  Accordion  from '@mui/material/Grid';
import  AccordionSummary  from '@mui/material/Grid';
import  ExpandMoreIcon  from '@mui/material/Grid';
import  AccordionDetails  from '@mui/material/Grid';

import { useEffect, useState } from 'react';
import { getProductData } from '../api/GetProductData';
const url = 'https://devonp.onpassive.com/wp-json/wl/v1/products/';

const ProductDetails = ({name}) =>{
    const [data,setData] = useState({});
    const[faqData, setFaqData] = useState(null);
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    useEffect(() => {
        getProductData(url+name).then((response) => {
            setData(response);
        })
        getProductData(`${url}${name}/faq`).then((response) => {
            setFaqData(response);
        })

    },[name]);

    return(
        <Container maxWidth="xl">
            <Box sx={{marginTop: '120px'}}>
                <Grid container>
                    {data.product_content?.map((pc)=> <Grid item xs={12} md={6} key={pc.image}>
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

export default ProductDetails