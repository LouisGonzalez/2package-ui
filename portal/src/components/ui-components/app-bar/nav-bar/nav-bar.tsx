import { AppBar, Box, IconButton, Menu, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { useState } from 'react';
import { ConstantsDropdownButtons, DropdownButton } from '../../dropdown-button/dropdown-button';

const pages = [
    { buttonTitle: 'Packages', options: [] },
    { buttonTitle: 'Routes', options: [] },
    { buttonTitle: 'Checkpoints', options: [] }
]

export const Navbar = () => {

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }

  return (
    <AppBar
      sx={{
        bgcolor: "#FFFFFF",
        color: "black",
        height: "80px",
      }}
      position="fixed"
      elevation={0}
    >
      <Box sx={{ marginTop: 1, marginLeft: 5, marginRight: 5 }}>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page: any) => (
              <DropdownButton
                key={page.buttonTitle}
                buttonTitle={page.buttonTitle}
                options={page.options}
                styles={ConstantsDropdownButtons.WhiteButton}
              />
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page: any) => (
                <DropdownButton
                  key={page.buttonTitle}
                  buttonTitle={page.buttonTitle}
                  options={page.options}
                  styles={ConstantsDropdownButtons.WhiteButton}
                />
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
