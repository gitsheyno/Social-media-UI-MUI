import React from 'react'
import { AppBar, styled, Toolbar, Typography, Box, InputBase, Badge, Menu, MenuItem } from '@mui/material'
import { Mail, Notifications, Pets } from '@mui/icons-material'
import { useState } from 'react'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between"
    })

    const Search = styled("div")(({ theme }) => ({
        backgroundColor: "white",
        padding: '10px 5px',
        borderRadius: theme.shape.borderRadius,
        width: "45%",
    }))
    const Icons = styled(Box)(({ theme }) => ({
        display: 'flex',
        gap: '10px'
    }))
    return (
        <AppBar position='sticky' sx={{ padding: '20px 0' }}>
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                   Mr_ddeveloper
                </Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Search>
                    <InputBase placeholder='search ...' />
                </Search>
                <Icons onClick={e => setOpen(!open)}>
                    <Badge badgeContent={4} color="error">
                        <Mail color='action' />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications color='action' />
                    </Badge>
                </Icons>

            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"

                open={open}
                onClose={e=>setOpen(!open)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar
