import Container from '@mui/material/Button';
import {AppBar, Avatar, Box, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography} from "@mui/material";
import React from 'react';
import Button from "@mui/material/Button";
import styles from '../styles/Navbar.module.css'

const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const pages = ['Promociones', 'Información', 'Contáctanos', 'Ubicación'];

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <AppBar position="static" style={{backgroundColor: 'transparent', width: '100%'}}>
            <Container maxWidth="l" style={{width: '100%'}}>
                <Toolbar disableGutters style={{width: '100%', margin: '0 15% 0 15%'}}>
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
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{
                        flexGrow: 1,
                        display: {xs: 'none', md: 'flex'},
                        justifyContent: 'space-between',
                        width: '100%'
                    }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'white', display: 'block'}}
                                className={styles.sections}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );

}
export default Navbar;
