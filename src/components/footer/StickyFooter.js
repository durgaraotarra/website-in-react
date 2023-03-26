import React from "react";
import {Box, Typography} from '@mui/material';

const Copyright = () => {
    return(
        <Typography
            variant="body2"
            color="#fff"
        >
            {'©'} {new Date().getFullYear()} {'ONPASSIVE - All Rights Reserved'}
        </Typography>
    );
}

const StickyFooter = () => {
    
    return(
        <Box sx={{p:2,textAlign:'center'}}>
            <Copyright />
        </Box>
    )
}

export default StickyFooter;