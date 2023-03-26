import * as React from 'react';
import { Box, IconButton} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { styled } from '@mui/material/styles';

const CustomIconButton = styled(IconButton)`
    color: #fff;
    transition: all 0.25s ease-in-out;
    :hover{
        color: #ff7720;
    }
`;

function SocialIcons(){
    return(
        <Box>
            <CustomIconButton>
                <TwitterIcon />
            </CustomIconButton>
            <CustomIconButton>
                <FacebookIcon />
            </CustomIconButton>
            <CustomIconButton>
                <YouTubeIcon />
            </CustomIconButton>
            <CustomIconButton>
                <InstagramIcon />
            </CustomIconButton>
            <CustomIconButton>
                <LinkedInIcon />
            </CustomIconButton>
        </Box>
    )
}

export default SocialIcons;
