import React from "react";
import {Grid, Typography} from '@mui/material';
import FooterCompanyLinks from "./FooterCompanyLinks";

const FooterLinks = () => {
    return(
        <Grid container justifyContent="space-between">
            <Grid item xs={12} md={4}>
                <Typography variant="h1" color="#fff" gutterBottom>
                About Us
                </Typography>
                <Typography variant="body2" color="#fff">
                    ONPASSIVE is an AI Tech company that builds fully autonomous products using the latest technologies for our global customer base. ONPASSIVE brings in a competitive advantage, innovation, and fresh perspectives to business and technology challenges. From strategy to designing, implementation, and management, we are here to accelerate innovation and transform businesses.
                </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
                <Grid container>
                    <Grid item xs={12} md={3}>
                        <FooterCompanyLinks />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <FooterCompanyLinks />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FooterCompanyLinks />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FooterLinks;