import React, { useState } from "react";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
import './Sidebar.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../Theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/Menu";

const Item = ({ title, to, icon, selected, setSelected}) =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <MenuItem
            active={selected===title}
            style={{color:colors.grey[100]}}
            onClick={()=>setSelected(title)}
            icon={icon}>
                <Typography>{title}</Typography>
                <Link to={to} />
            </MenuItem>
    )
}
const Sidebar = ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box sx={
            {
            "& .pro-sidebar-inner":
            {
                background:`${colors.primary[400]} !important`
            },
            "& .pro-icon-wrapper":
            {
                backgroundColor:"transprant !important"
            },
            "& .pro-inner-item":
            {
                padding:"0 !important"
            },
            "& .pro-inner-item:hover":
            {
                color:"#868dfb !important"
            },
            "& .pro-inner-item:active":
            {
                color:"#6870fa !important"
            },
            
        
        }}>
            <ProSidebar collapsed={isCollapsed}>
                    <Menu iconShape="square">
                        <MenuItem 
                            onClick={()=>setIsCollapsed(!isCollapsed)}
                            icon={isCollapsed?<MenuOutlinedIcon/>: undefined}
                            style={{
                                margin: "10px 0 20px 0",
                                color:colors.grey[100]
                            }}
                            >  
                            {!isCollapsed && (
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Box display={"flex"} justifyContent={"center"}>
                                    <img alt="" width="190px" src={`../../images/white.png`}/>
                                    </Box>
                                    <IconButton onClick={()=>setIsCollapsed(!isCollapsed)}>
                                        <MenuOutlinedIcon/>
                                    </IconButton>
                                </Box>
                            )}
                        </MenuItem>
                        <Box paddingLeft={isCollapsed?undefined:"10px"}>
                            <Item
                                title="Dashboard"
                                to="/"
                                icon={<HomeOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </Box>
                    </Menu>
                </ProSidebar>
        </Box>
    )
}
export default Sidebar;