import React, { useRef, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Item from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";

import Zoom from "@mui/material/Zoom";
import FormControlLabel from "@mui/material/FormControlLabel";

import PokePackzLogo from "../Pokemon Images/PokePackzLogin.png";

import { useAuth } from "../contexts/AuthContext";

function Profile() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Unable to logout.");
    }
  }

  return (
    <div className="Profile">
      <Card sx={{ minWidth: 400, margin: 5 }}>
        <CardContent>
          <Typography variant="h3" component="div" style={{ marginBottom: 20 }}>
            Profile
          </Typography>
          <Typography variant="h6" component="div">
            Email: {currentUser.email}
          </Typography>
          <Grid
            container
            direction="row-reverse"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Item>
              <Tooltip title="Logout of account">
                <Button variant="outlined" size="large" onClick={handleLogout}>
                  Logout
                </Button>
              </Tooltip>
            </Item>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default Profile;
