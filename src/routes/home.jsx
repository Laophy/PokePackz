import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import PokePackzLogo from "../Pokemon Images/PokePackz Open.png";
import PokePackzImg from "../Pokemon Images/teamLogos.jpg";
import BoosterBox from "../Pokemon Images/booster.png";

function Home() {
  return (
    <div
      className="Home"
      style={{
        height: "100vh",
        marginTop: 25,
        backgroundColor: "#fff",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={12}>
          <Grid item sm={6} sx={{ height: "250" }}>
            <Item style={{ padding: 1, textAlign: "center" }}>
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
            </Item>
          </Grid>
          <Grid item sm={6} sx={{ height: "250" }}>
            <Item
              style={{ padding: 1, textAlign: "center", padding: "70px 0" }}
            >
              <h1>
                Explore the world of finding pokemon by opening epic pokemon
                packs from the real game.
              </h1>
            </Item>
          </Grid>
          <Grid item sm={6} sx={{ height: "250" }}>
            <Item
              style={{
                padding: 1,
                paddingLeft: 5,
                textAlign: "center",
                marginTop: 150,
                padding: "70px 0",
              }}
            >
              <h2>
                Here you will be able to collect, trade, and sell your poke
                packz you find or buy. Try to collect them all! Open Packs to
                unlock more pokemon cards that will be added to your personal
                inventory.
              </h2>
            </Item>
          </Grid>
          <Grid item sm={6} sx={{ height: "250" }}>
            <Item style={{ padding: 1, textAlign: "center", marginTop: 150 }}>
              <img
                src={BoosterBox}
                style={{
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  height: "40%",
                  width: "40%",
                  objectFit: "cover",
                }}
              />
            </Item>
          </Grid>
          <Grid item sm={6} sx={{ height: "250" }}>
            <Item style={{ padding: 1, textAlign: "center" }}>
              <img
                src={PokePackzImg}
                style={{
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  height: "80%",
                  width: "80%",
                  objectFit: "cover",
                }}
              />
            </Item>
          </Grid>
          <Grid item sm={6} sx={{ height: "250" }}>
            <Item
              style={{
                padding: 1,
                paddingRight: 5,
                textAlign: "center",
                marginTop: 150,
                padding: "70px 0",
              }}
            >
              <h2>
                Explore our worlds to collect more pokemon cards. Maybe join a
                team and battle players online. Choose between three teams and
                unleash your inner pokemon skills.
              </h2>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
