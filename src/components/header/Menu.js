import React from "react";
import { Box, Link} from '@mui/material';
import { styled } from '@mui/material/styles';

const menuItems = [
    {menuName:'Home',menuLink:'/'},
    {menuName:'About Us',menuLink:'/about-us'},
    {menuName:'Products',menuLink:'/products'},
    {menuName:'Media Center',menuLink:'/news'},
    {menuName:'Contact Us',menuLink:'/contact-us'},
    {menuName:'Blog',menuLink:'/blog'},
    {menuName:'Register',menuLink:'/oes'},
    {menuName:'Login',menuLink:'/login'}
]


const Menu = () => {
    const MenuLink = styled(Link)`
    color: #7D7E84;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.25s ease-in-out;
    :hover{
        color: #00B7FF;
        background-color: transparent
    }
    `;

    return(
        <Box sx={{display:'flex',justifyContent:'flex-end'}}>
            {menuItems.map((menuItem,Index) => (
                <MenuLink key={Index} href={menuItem.menuLink} sx={{p:0,mx:1}}>{menuItem.menuName}</MenuLink>
            ))}
        </Box>
    )
}

export default Menu;