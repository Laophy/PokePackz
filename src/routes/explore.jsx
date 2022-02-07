import react from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Zoom from "@mui/material/Zoom";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Item from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import JohtoIMG from "../Pokemon Images/regions/johto.png";
import KantoIMG from "../Pokemon Images/regions/kanto.png";
import HoennIMG from "../Pokemon Images/regions/hoenn.jpg";
import SinnohIMG from "../Pokemon Images/regions/Sinnoh.jpg";
import { CardHeader } from "@mui/material";

function Explore() {
  return (
    <div className="Explore" style={{ margin: 25 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Zoom in={true}>
          <Card
            sx={{
              maxWidth: 500,
              margin: 5,
              height: 700,
              backgroundColor: "#F5F5F5",
              boxShadow: 3,
            }}
          >
            <CardHeader title="Kanto Region" />
            <CardMedia
              component="img"
              height="300"
              image={KantoIMG}
              alt="Kanto Region"
            />
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-end"
            >
              <Button
                variant="outlined"
                color="primary"
                style={{ margin: 15 }}
                component={Link}
                to={"/regions/kanto"}
              >
                Explore Kanto
              </Button>
            </Grid>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                The Kanto region (Japanese: カントー地方 Kanto region) is a
                region of the Pokémon world. Kanto is located east of Johto,
                which together form a joint landmass that is south of Sinnoh.
                Kanto is the setting of the first generation of games and can be
                explored in generations II, III, IV, and VII. Professor Oak is
                the resident Pokémon Professor and gives Pokémon Trainers a
                choice between Bulbasaur, Charmander, or Squirtle as their
                starter Pokémon. In Pokémon Yellow, the only choice is a Pikachu
                that he recently caught, although he did have an Eevee. In Let's
                Go, Pikachu!, the player chooses Pikachu. In Let's Go, Eevee!,
                the player chooses Eevee. In the games, the player begins their
                journey in Pallet Town and ends it at Indigo Plateau.
              </Typography>
            </CardContent>
          </Card>
        </Zoom>
        <Zoom in={true}>
          <Card
            sx={{
              maxWidth: 500,
              margin: 5,
              height: 700,
              backgroundColor: "#F5F5F5",
              boxShadow: 3,
            }}
          >
            <CardHeader title="Johto Region" />
            <CardMedia
              component="img"
              height="300"
              image={JohtoIMG}
              alt="Johto Region"
            />
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-end"
            >
              <Button
                variant="outlined"
                color="primary"
                style={{ margin: 15 }}
                component={Link}
                to={"/regions/johto"}
              >
                Explore Johto
              </Button>
            </Grid>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                The Johto region (Japanese: ジョウト地方 Johto region) is a
                region of the Pokémon world. Johto is located west of Kanto,
                which together form a joint landmass that is south of Sinnoh and
                Sinjoh Ruins. It was the second core series region to be
                introduced. First explored in Pokémon Gold and Silver, it is
                home to an additional 100 Pokémon that were not present in the
                previous games. It is also the setting of Pokémon Crystal,
                Pokémon HeartGold, and Pokémon SoulSilver.
              </Typography>
            </CardContent>
          </Card>
        </Zoom>
        <Zoom in={true}>
          <Card
            sx={{
              maxWidth: 500,
              margin: 5,
              height: 700,
              backgroundColor: "#F5F5F5",
              boxShadow: 3,
            }}
          >
            <CardHeader title="Hoenn Region" />
            <CardMedia
              component="img"
              height="300"
              image={HoennIMG}
              alt="Hoenn Region"
            />
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-end"
            >
              <Button
                variant="outlined"
                color="primary"
                style={{ margin: 15 }}
                component={Link}
                to={"/regions/hoenn"}
              >
                Explore Hoenn
              </Button>
            </Grid>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                The Hoenn region (Japanese: ホウエン地方 Hoenn region) is a
                region of the Pokémon world. It is located south of Sinnoh, as
                stated in The Unbeatable Lightness of Seeing!. It is the setting
                of Pokémon Ruby, Sapphire, Emerald, Omega Ruby, and Alpha
                Sapphire. It was the third core series region to be introduced.
                Hoenn is inspired by the real-world Japanese main island of
                Kyushu. The names of most of the cities in Hoenn are made of two
                words put together (Little Root, Fort Tree, Slate Port, Ever
                Grande, etc.) rather than colors or plants as Kanto and Johto
                had done. Professor Birch of Littleroot Town offers the starter
                Pokémon known as Treecko, Torchic, or Mudkip to Trainers
                beginning their journey of this vast land.
              </Typography>
            </CardContent>
          </Card>
        </Zoom>
        <Zoom in={true}>
          <Card
            sx={{
              maxWidth: 500,
              margin: 5,
              height: 700,
              backgroundColor: "#F5F5F5",
              boxShadow: 3,
            }}
          >
            <CardHeader title="Sinnoh Region" />
            <CardMedia
              component="img"
              height="300"
              image={SinnohIMG}
              alt="Sinnoh Region"
            />
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-end"
            >
              <Button
                variant="outlined"
                color="primary"
                style={{ margin: 15 }}
                component={Link}
                to={"/regions/sinnoh"}
              >
                Explore Sinnoh
              </Button>
            </Grid>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                The Sinnoh region (Japanese: シンオウ地方 Sinnoh region) is a
                region of the Pokémon world. It is located north of Kanto,[1]
                Johto,[1] and Hoenn.[2] It is the setting of Pokémon Diamond,
                Pearl, Platinum, Brilliant Diamond, Shining Pearl, and Legends:
                Arceus; the latter explores the region's earlier history and
                reveals its former name, Hisui. It was the fourth core series
                region to be introduced. Sinnoh is composed of the large
                mainland, the Battle Zone on another landmass to the northeast,
                and several smaller islands on both sides of the region. Most of
                Sinnoh's routes are on land, having very few water routes, in
                vast contrast to Hoenn. The region is divided by Mount Coronet,
                roughly comparable to how the continent that Kanto and Johto
                make up is essentially a contiguous region.
              </Typography>
            </CardContent>
          </Card>
        </Zoom>
      </Grid>
    </div>
  );
}

export default Explore;
