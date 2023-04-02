import logo from '../../logo.svg';
import React from "react";
import Menu from './Menu';
import { Container, Box, Grid} from '@mui/material';
import { styled } from '@mui/material/styles';
//import MenuIcon from '@mui/icons-material/Menu';

function NavBar(){
    const NavBarBox = styled(Box)`
    background-color: #fff;
    transition: all 0.25s ease-in-out;
    `;
    return(
        <NavBarBox sx={{py:1}}>
            <Container maxWidth="xl">
                <Grid container sx={{alignItems:'center'}}>
                    <Grid item md={3}>
                        <img src={logo} alt="ONPASSIVE" />
                    </Grid>
                    <Grid item md={9}>
                        <Box>
                            <Menu />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </NavBarBox>
    )
}

export default NavBar;