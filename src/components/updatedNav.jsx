import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import StoreIcon from "@mui/icons-material/Store";

import pokelogo from "../Pokemon Images/PokePackz.png";

const drawerWidth = 240;

export default function UpdatedNav() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "#FB1B1B",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            PokePackz
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderColor: "red",
            backgroundColor: "#F5F5F5",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List
          sx={{
            backgroundColor: "#F5F5F5",
          }}
        >
          <ListItem>
            <Box
              component="img"
              sx={{
                height: 55,
              }}
              alt="Your logo."
              src={pokelogo}
            />
          </ListItem>
        </List>
        <Divider />
        <List
          sx={{
            backgroundColor: "#F5F5F5",
          }}
        >
          {["Store", "Packs", "Explore", "How to"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{<StoreIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List
          sx={{
            backgroundColor: "#F5F5F5",
          }}
        >
          {["Profile", "Inventory", "Login/Logout"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{<StoreIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
