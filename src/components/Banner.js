import PropTypes from 'prop-types';
import  Box  from '@mui/material/Box';
import  Grid  from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const Banner = ({title,subtitle,content,bannerImg}) =>{
    return(
        
            <Box
            sx={{display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundImage: `URL('${bannerImg}')`,
                height: '50vh'
            }}
            >
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h1" color="white">{title}</Typography>
                            {subtitle && <Typography variant='h3' color="white">{subtitle}</Typography>}
                            <Typography variant='subtitle1' color="white">{content}</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
    );
}

Banner.propTypes ={
    title: PropTypes.string,
    subtitle: PropTypes.string,
    content: PropTypes.string,
    bannerImg: PropTypes.string
}
export default Banner;