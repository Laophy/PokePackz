import React, { useState, useEffect } from "react";
import axios from "axios";
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
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import KantoIMG from "../../Pokemon Images/regions/kanto.png";
import { CardHeader } from "@mui/material";
import { Collections } from "@mui/icons-material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Kanto() {
  //151 or 3rd gen 386 4th gen 493
  const [pokemon, setPokemon] = useState([]);
  const [basesetID, setbasesetID] = useState(102);
  const [baseSet, setBaseSet] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingIMG, setloadingIMG] = useState(false);
  const [error, setError] = useState();
  const [searchBar, setSearchBar] = useState("flex-start");
  const [searchZoom, setSearchZoom] = useState(true);

  const [open, setOpen] = useState(false);
  const [encounter, setEncounter] = useState(false);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  const baseURL = "https://api.pokemontcg.io/v2/cards/base1-";

  const fetchData = async () => {
    try {
      setloadingIMG(true);
      setError("No errors");
      await axios
        .get(`${baseURL}${basesetID}`, {
          "X-Api-Key": process.env.REACT_APP_TCG_API_KEY,
        })
        .then((response) => {
          setPokemon(response.data.data);
          setloadingIMG(false);
        });
      /*
      await axios
        .get("https://api.pokemontcg.io/v2/cards/?q=set.id:base1")
        .then((res) => {
          setBaseSet(res.data.data.data);
        });
        */
      setLoading(false);
    } catch {
      setError("Failed to fetch data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleSearch() {
    displayActions();
    if (searchBar == "flex-start") {
      setSearchZoom(false);
      setSearchBar("flex-end");
      setSearchZoom(true);
    }
    if (searchBar == "flex-end") {
      setSearchZoom(false);
      setSearchBar("flex-start");
      setSearchZoom(true);
    }

    if (encounter == true) {
      let randomCard = (Math.random(102) * 100).toFixed(0);
      setbasesetID(randomCard);
      fetchData();
      setEncounter(false);
    }
  }

  function collect() {
    setColor("success");
    setMessage(
      `Collected ${pokemon.name} ($${pokemon.cardmarket.prices.averageSellPrice})`
    );
    setOpen(true);
    setEncounter(false);
    handleSearch();
  }

  function sell() {
    setColor("success");
    setMessage(
      `${pokemon.name} sold for: $${pokemon.cardmarket.prices.averageSellPrice}`
    );
    setOpen(true);
    setEncounter(false);
    handleSearch();
  }

  function displayActions() {
    let encounterRate = (Math.random(10) * 1).toFixed(0);
    //console.log(encounterRate);
    //console.log(encounter);
    if (encounterRate == 0) {
      setEncounter(true);
    } else {
      setEncounter(false);
    }
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      {loading ? (
        <div>LOADING DATA</div>
      ) : (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Card
            sx={{
              maxWidth: 800,
              margin: 5,
              backgroundColor: "#F5F5F5",
              boxShadow: 3,
            }}
          >
            <CardHeader title="Kanto Region" />
            <CardMedia
              component="img"
              height="400"
              image={KantoIMG}
              alt="Kanto Region"
            />
            <CardContent>
              {!encounter ? (
                <Typography variant="body2" color="text.secondary">
                  Explore wild pokemon in the Kanto region. Press Search to
                  begin your adventure!
                </Typography>
              ) : (
                <Typography variant="body2" color="error">
                  You found a <b>{pokemon.name}</b> card, do you wish to collect
                  or sell (Ignoring this will discard the card)?
                </Typography>
              )}
            </CardContent>

            <Grid
              container
              direction="row"
              justifyContent={searchBar}
              alignItems="center"
            >
              <Zoom in={searchZoom}>
                <Tooltip title="Search Kanto">
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ margin: 15 }}
                    onClick={handleSearch}
                  >
                    Search
                  </Button>
                </Tooltip>
              </Zoom>
            </Grid>
          </Card>
          {encounter ? (
            <Card>
              <CardHeader title={`Wild ${pokemon.name}`} />
              <Zoom in={!loadingIMG}>
                <CardMedia
                  component="img"
                  image={pokemon.images.small}
                  alt="Actions img"
                />
              </Zoom>
              <CardContent>
                <Typography variant="body2">
                  <b>
                    Sell price: ${pokemon.cardmarket.prices.averageSellPrice}
                  </b>
                </Typography>
              </CardContent>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
              >
                <Tooltip title="Collect card">
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ margin: 15 }}
                    onClick={collect}
                  >
                    Collect
                  </Button>
                </Tooltip>
                <Tooltip title="Sell card">
                  <Button
                    variant="outlined"
                    color="success"
                    style={{ margin: 15 }}
                    onClick={sell}
                  >
                    Sell
                  </Button>
                </Tooltip>
              </Grid>
            </Card>
          ) : (
            ""
          )}
        </Grid>
      )}
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
        <Alert onClose={handleClose} severity={color} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
