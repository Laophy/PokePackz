import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Item from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";
import PokePackzLogo from "../Pokemon Images/PokePackz Open.png";

function Login() {
  return (
    <div className="Login">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Card sx={{ minWidth: 400, margin: 5 }}>
          <CardContent>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src={PokePackzLogo}
                style={{
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  height: "65%",
                  width: "65%",
                  objectFit: "cover",
                }}
              />
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="flex-end"
              marginTop={2}
              marginBottom={2}
            >
              <Item>
                <Tooltip title="Sign in with your Google account">
                  <Button variant="outlined" size="large">
                    Connect with Google
                  </Button>
                </Tooltip>
              </Item>
            </Grid>
            <Divider variant="middle" />
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
            >
              <Item>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  type="email"
                />
              </Item>
              <Item>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                  type="password"
                />
              </Item>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Item>
                <Checkbox defaultChecked />
              </Item>
              <Item>
                <Typography variant="p" component="div">
                  Remember me
                </Typography>
              </Item>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
              marginTop={3}
            >
              <Item>
                <Tooltip title="Create a new account">
                  <Button size="small">Create Account</Button>
                </Tooltip>
              </Item>
              <Item>
                <Tooltip title="Sign in">
                  <Button size="small">Login</Button>
                </Tooltip>
              </Item>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}

export default Login;
