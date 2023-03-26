import * as React from 'react';
import {Container, Grid, Box} from '@mui/material';
import SocialIcons from './SocialIcons';
import QuickLinks from './QuickLinks';
import { styled } from '@mui/material/styles';


function TopNavbar(){
    const TopBarBox = styled(Box)`
        background-color: #0f2851;
    `;
    return(
        <TopBarBox>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item md={4} sm={12}>
                    </Grid>
                    <Grid item md={8} sm={12}>
                        <Box sx={{display: 'flex',justifyContent: 'flex-end',alignItems: 'center'}}>
                            <QuickLinks />
                            <SocialIcons />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </TopBarBox>
    );
}

export default TopNavbar;