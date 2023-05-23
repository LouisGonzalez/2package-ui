import { Button, ListItemIcon } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu, { MenuProps } from '@mui/material/Menu';
import { alpha, styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export interface DropdownButtonProps {
    buttonTitle?: string | JSX.Element[] | JSX.Element;
    options: Array<Options>;
    styles: StylesDropdown;
    isExternal?: boolean;
}

export interface Options {
    title?: string;
    click?: () => void;
    redirectionLink?: string;
    icon?: JSX.Element[] | JSX.Element;
}

export interface StylesDropdown {
    backgroundColor?: string;
    color?: string;
    fontSize: number;
}

export const ConstantsDropdownButtons = {
  WhiteButton: {
    backgroundColor: "#FFFFFF",
    color: "#414547",
    fontSize: 14,
  },
  AlternativeButton: {
    backgroundColor: "#C70039",
    color: "#FFFFFF",
    fontSize: 14
  },
};

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
    
))(({theme}) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light'
            ? 'rgb(55, 65, 81)'
            : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.5) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0'
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5)
            },
            '&:active': {
                backgroundClor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                )
            }
        }
    }
}));

export const DropdownButton = ({
    buttonTitle,
    options,
    styles,
    isExternal
} : DropdownButtonProps) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }
  
  const handleClose = () => {
    setAnchorEl(null);
  }

  const renderTitleDropdown = () => {
    if(typeof buttonTitle === 'string'){
        return <>{buttonTitle}</>
    }
    return buttonTitle;
  }

  const renderIcon = (option: Options) => {
    if(option.icon !== undefined) {
        return <ListItemIcon>{option.icon}</ListItemIcon>
    }
    return;
  }

  const renderOption = (option: Options) => {
    if(option.redirectionLink !== undefined){
        return (
            <Link
                to={option.redirectionLink}
                style={{ color: 'black', textDecorationLine: 'none' }}
                key={option.title}
            >
                <MenuItem key={option.title}>
                    {renderIcon(option)}
                    <>{option.title}</>
                </MenuItem>
            </Link>
        )
    } else {
        return (
            <MenuItem key={option.title} onClick={option.click}>
                {renderIcon(option)}
                <>{option.title}</>
            </MenuItem>
        )
    }
  }

  return (
    <>
        <Button
            sx={{
                background: styles.backgroundColor,
                color: styles.color,
                textTransform: 'none',
                fontSize: styles.fontSize,
                fontFamily: 'sans-serif',
                borderRadius: 0,
                '&:hover': {
                    borderBottom: '2px solid #4B286D'
                }
            }}
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon/>}>
            {renderTitleDropdown()}
        </Button>
        <StyledMenu
            id='demo-customized-menu'
            MenuListProps={{
                'aria-labelledby': 'demo-customized-button'
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}>
            {options.map((option: Options) => renderOption(option))}
        </StyledMenu>
    </>
  )
}
