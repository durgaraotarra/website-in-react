import React from "react";
import {Box, Container, CssBaseline} from '@mui/material';
import FooterLogo from "./FooterLogo";
import StickyFooter from "./StickyFooter";
import { styled } from '@mui/material/styles';
import FooterLinks from "./FooterLinks";

const Footer = () => {
    const FooterBox = styled(Box)`
        background: linear-gradient(277.59deg, #0F2851 20.09%, #475773 94.81%);
    `;

    return(
        <FooterBox sx={{py:2}}>
            <Container maxWidth="xl">
                <CssBaseline />
                <FooterLogo />
                <FooterLinks />
                <StickyFooter />
            </Container>
        </FooterBox>
    )
}

export default Footer;