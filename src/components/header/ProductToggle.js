import React from "react";
import { Typography, Box, List, ListItem, ListItemButton, ListItemText} from '@mui/material';

function DrawerAppBar(props) {
    const { window } = props;
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary='Toggle Menu' />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}

export default DrawerAppBar;