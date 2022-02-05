import React, { useRef, useState, useEffect } from "react";
import { useAuth, currentUser } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Item from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";

import Zoom from "@mui/material/Zoom";
import FormControlLabel from "@mui/material/FormControlLabel";

import PokePackzLogo from "../Pokemon Images/PokePackzCreateAccount.png";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSumbit(e) {
    e.preventDefault();
    console.log(currentUser);

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Zoom in={true}>
      <div className="SignUp">
        <p>Error: {error}</p>
        <p>User: {JSON.stringify(currentUser.email)}</p>
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
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={handleClick}
                    >
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
                    inputRef={emailRef}
                  />
                </Item>
                <Item>
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    type="password"
                    inputRef={passwordRef}
                  />
                </Item>
                <Item>
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="Confirm Password"
                    variant="standard"
                    type="password"
                    inputRef={passwordConfirmRef}
                  />
                </Item>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              ></Grid>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                marginTop={5}
              >
                <Item>
                  <Tooltip title="Create new account">
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={handleSumbit}
                      disabled={loading}
                    >
                      Create Account
                    </Button>
                  </Tooltip>
                </Item>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Item>
                  <Typography gutterBottom variant="p" component="div">
                    Already have an account?
                  </Typography>
                </Item>
                <Item>
                  <Button
                    size="small"
                    variant="outlined"
                    color="success"
                    onClick={handleClick}
                    style={{ marginLeft: 5 }}
                    component={Link}
                    to={"/login"}
                  >
                    Login
                  </Button>
                </Item>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Account Created.
          </Alert>
        </Snackbar>
      </div>
    </Zoom>
  );
}

export default SignUp;
