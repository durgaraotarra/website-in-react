import { AppBar } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";
import TopNavbar from "./TopNavbar";



function Header(){
    return(
        <AppBar>
            <TopNavbar />
            <NavBar />
        </AppBar>
    );
}

export default Header;