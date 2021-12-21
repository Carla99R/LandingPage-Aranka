import Container from '@mui/material/Button';
import {AppBar, Avatar, Box, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography} from "@mui/material";
import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import styles from '../styles/Navbar.module.css'

const Navbar = (props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [colors, setColors] = useState(null);
    const pages = [
        {
            name: 'Promociones',
            id: 'prom'
        },
        {
            name: 'Información',
            id: 'info'
        },
        {
            name: 'Contáctanos',
            id: 'contac'
        },
        {
            name: 'Ubicación',
            id: 'location'
        }
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
            overflowX: 'hidden'
        }}>
            <Container maxWidth="m" style={{width: '100vw'}}>
                <Toolbar disableGutters style={{width: '80%', margin: '0 15% 0 15%'}}>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
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
                            <a
                                key={page.name}
                                onClick={() => {
                                    handleCloseNavMenu(page.id)
                                }}
                                style={{my: 2, color: !props.scroll ? 'white': colors === page.id ? '#9d4edd' : 'white', display: 'block'}}
                                className={styles.sections}
                                href={'#' + page.id}
                            >
                                {page.name}
                            </a>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );

}
export default Navbar;
