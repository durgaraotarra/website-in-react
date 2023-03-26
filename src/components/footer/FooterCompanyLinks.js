import React from "react";
import {Box, Link} from '@mui/material';
import { styled } from '@mui/material/styles';



const FooterCompanyLinks = () => {
    const FooterLink = styled(Link)`
        color: rgba(255,255,255,0.75);
        text-decoration: none;
        transition: all 0.25s ease-in-out;
        :hover{
            color: rgba(255,255,255,1)
        }
    `;
    return(
        <Box sx={{display: 'flex',flexDirection: 'column'}}>
            <FooterLink underline="none" as="a" href="" sx={{mb:1}}>Careers</FooterLink>
            <FooterLink underline="none" as="a" href="" sx={{mb:1}}>Events</FooterLink>
            <FooterLink underline="none" as="a" href="" sx={{mb:1}}>News</FooterLink>
            <FooterLink underline="none" as="a" href="" sx={{mb:1}}>Contact Us</FooterLink>
        </Box>
    );
}

export default FooterCompanyLinks;


