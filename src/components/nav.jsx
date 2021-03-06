import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";

import { useAuth } from "../contexts/AuthContext";

import pokelogo from "../Pokemon Images/PokePackz.png";
import { height } from "@mui/system";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Nav() {
  const { currentUser, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} component={Link} to={"/profile"}>
        Profile
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose} component={Link} to={"/inventory"}>
        Inventory
      </MenuItem>
      <MenuItem onClick={handleMenuClose} component={Link} to={"/store"}>
        Store
      </MenuItem>
      <MenuItem onClick={handleMenuClose} component={Link} to={"/sets"}>
        Pack Sets
      </MenuItem>
      <MenuItem onClick={handleMenuClose} component={Link} to={"/pokedex"}>
        Dex
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose} component={Link} to={"/settings"}>
        Settings
      </MenuItem>
      {currentUser ? (
        <MenuItem onClick={logout} component={Link} to={"/login"}>
          Logout
        </MenuItem>
      ) : (
        <MenuItem onClick={handleMenuClose} component={Link} to={"/login"}>
          Login
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={1} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>System Alerts</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>More</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#0075BE" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Box
              component="img"
              sx={{
                height: 45,
              }}
              alt="Your logo."
              src={pokelogo}
            />
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          <Tooltip title="Home menu">
            <MenuItem onClick={handleMenuClose} component={Link} to={"/"}>
              Home
            </MenuItem>
          </Tooltip>

          {currentUser ? (
            <>
              <Tooltip title="Explore pokemon regions">
                <MenuItem
                  onClick={handleMenuClose}
                  component={Link}
                  to={"/explore"}
                >
                  Explore
                </MenuItem>
              </Tooltip>
              <Tooltip title="Buy pokemon packs">
                <MenuItem
                  onClick={handleMenuClose}
                  component={Link}
                  to={"/store"}
                >
                  Store
                </MenuItem>
              </Tooltip>
              <Tooltip title="View profile">
                <MenuItem
                  onClick={handleMenuClose}
                  component={Link}
                  to={"/profile"}
                >
                  Profile
                </MenuItem>
              </Tooltip>
            </>
          ) : (
            <MenuItem onClick={handleMenuClose} component={Link} to={"/login"}>
              Login
            </MenuItem>
          )}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Tooltip title="Notifications">
                <Badge badgeContent={1} color="error">
                  <MailIcon />
                </Badge>
              </Tooltip>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Tooltip title="System Alerts">
                <Badge badgeContent={0} color="error">
                  <NotificationsIcon />
                </Badge>
              </Tooltip>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
