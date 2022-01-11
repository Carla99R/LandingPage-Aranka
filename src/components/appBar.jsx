import Container from '@mui/material/Button';
import {AppBar, Avatar, Box, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography} from "@mui/material";
import React, {useEffect, useState} from 'react';
import styles from '../styles/Navbar.module.css'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = (props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [colors, setColors] = useState(null);
    const pages = [
        {
            name: 'Sobre Nosotros',
            id: 'info'
        },
        {
            name: 'Servicios',
            id: 'services'
        },
        {
            name: 'Ubicación',
            id: 'location'
        },
        {
            name: 'Preguntas Frecuentes',
            id: 'faq'
        },
        {
            name: 'Contáctanos',
            id: 'contact'
        },
    ];

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (e) => {
        setAnchorElNav(null);
        setColors(e);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    useEffect(()=>{
        if(!props.scroll){
            setColors(null);
        }
    }, [props.scroll])


    return (
        <AppBar position="static" style={{
            backgroundColor: props.scroll ? 'black' : 'transparent',
            width: '100vw',
            position: 'fixed',
            overflowX: 'hidden',
            zIndex:2
        }}>
            <Container maxWidth="m" style={{width: '100%', display:'flex', justifyContent:'flex-end'}}>
                <Toolbar disableGutters style={{width: '60%', display:'flex', justifyContent:'flex-end', paddingRight:'3%'}}>
                    <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{
                        flexGrow: 1,
                        display: {xs: 'none', md: 'flex'},
                        justifyContent: 'space-between',
                        width: '80%'
                    }}>
                        {pages.map((page) => (
                            <Link to={page.id} spy={true} smooth={true} duration={500}
                                key={page.name}
                                onClick={() => {
                                    handleCloseNavMenu(page.id)
                                }}
                                style={{my: 2, color: !props.scroll ? 'white': colors === page.id ? '#9d4edd' : 'white', display: 'block'}}
                                className={styles.sections}
                            >
                                {page.name}
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );

}
export default Navbar;
