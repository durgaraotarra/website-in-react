import React from "react";
import { Box, Grid, Typography, Divider } from '@mui/material';
import logo from '../../logo.svg';
import SocialIcons from "../header/SocialIcons";



const FooterLogo = () => {
    return(
        <Box>
            <Grid container alignItems="center">
                <Grid item xs={12} md={4}>
                    <img src={logo} alt="ONPASSIVE" />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box sx={{display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
                        <Typography
                            variant="body1"
                            color="#fff"
                        >
                            Follow Us
                        </Typography>
                        <SocialIcons />
                    </Box>
                </Grid>
            </Grid>
            <Divider sx={{mb:3}} />
        </Box>
    )
}

export default FooterLogo;