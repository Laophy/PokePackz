import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PokePackzLogo from "../Pokemon Images/PokePackz Open.png";

function Home() {
  return (
    <div className="Home">
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <img src={PokePackzLogo} style={{ margin: 10 }} />
        <img src={PokePackzLogo} style={{ margin: 10 }} />
        <img src={PokePackzLogo} style={{ margin: 10 }} />
        <img src={PokePackzLogo} style={{ margin: 10 }} />
        <img src={PokePackzLogo} style={{ margin: 10 }} />
        <img src={PokePackzLogo} style={{ margin: 10 }} />
        <img src={PokePackzLogo} style={{ margin: 10 }} />
        <img src={PokePackzLogo} style={{ margin: 10 }} />
        <img src={PokePackzLogo} style={{ margin: 10 }} />
        <img src={PokePackzLogo} style={{ margin: 10 }} />
        <img src={PokePackzLogo} style={{ margin: 10 }} />
        <img src={PokePackzLogo} style={{ margin: 10 }} />
        <img src={PokePackzLogo} style={{ margin: 10 }} />
        <img src={PokePackzLogo} style={{ margin: 10 }} />
        <img src={PokePackzLogo} style={{ margin: 10 }} />
      </Grid>
    </div>
  );
}

export default Home;
