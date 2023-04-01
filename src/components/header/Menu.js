import React from "react";
import { Link } from "react-router-dom";
import  Box  from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const menuItems = [
    {name:'Home',path:'/'},
    {name:'About Us',path:'/about-us'},
    {name:'Products',path:'/products'},
    {name:'Media Center',path:'/news'},
    {name:'Contact Us',path:'/contact-us'},
    {name:'Blog',path:'/blog'},
    {name:'Register',path:'/oes'},
    {name:'Login',path:'/login'}
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
                <MenuLink key={Index} to={menuItem.path} sx={{p:0,mx:1}}>{menuItem.name}</MenuLink>
            ))}
        </Box>
    )
}

export default Menu;