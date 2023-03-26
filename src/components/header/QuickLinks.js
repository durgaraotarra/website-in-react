import React from "react";
import {Box, Button} from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import CallIcon from '@mui/icons-material/Call';
import { styled } from '@mui/material/styles';


const CustomButton = styled(Button)`
    color: #fff;
    transition: all 0.25s ease-in-out;
    :hover{
        color: #ff7720;

    }
`;


function QuickLinks(){
    return(
        <Box sx={{mr:2}}>
            <CustomButton>
                <VideocamIcon sx={{mr:1}} />
                Videos
            </CustomButton>
            <CustomButton>
                <BusinessCenterIcon sx={{mr:1}} />
                Careers
            </CustomButton>
            <CustomButton>
                <RssFeedIcon sx={{mr:1}} />
                Blog
            </CustomButton>
            <CustomButton>
                <CallIcon sx={{mr:1}} />
                Support
            </CustomButton>
        </Box>
    );
}

export default QuickLinks;