import react, { useState, useEffect, Component } from "react";
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
import { CardHeader } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";

function PokeDex() {
  //151 or 3rd gen 386
  const [pokemon, setPokemon] = useState([]);
  const [pokeLimit, setPokeLimit] = useState(386);
  const [shiny, setShiny] = useState(false);
  const [url, setURL] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
  );

  function changeShiny() {
    if (shiny == false) {
      setURL(
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"
      );
      setShiny(true);
    } else if (shiny == true) {
      setURL(
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
      );
      setShiny(false);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${pokeLimit}`
      );
      const data = await response.json();
      const pokemonList = data.results
        .slice(0, data.results.length)
        .map((items) => items)
        .flat();
      setPokemon(pokemonList);
    };

    fetchData();
  }, []);

  return (
    <div className="PokeDex" style={{ margin: 25 }}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Item>
          <Button variant="outlined">Sumbit</Button>
        </Item>
        <Item>
          <TextField
            id="standard-basic"
            label="# of Pokemon"
            value="386"
            variant="standard"
            type="number"
            style={{ marginLeft: 10 }}
          />
        </Item>
        <Item>
          <Checkbox
            onChange={() => {
              changeShiny();
            }}
          />
        </Item>
        <Typography variant="p" component="div">
          Shiny
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
      >
        {pokemon.map((pokeClass, id) => {
          return (
            <>
              <Tooltip title={pokeClass.name}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ marginTop: 10 }}
                >
                  <Zoom in={true}>
                    <Card
                      variant="outlined"
                      style={{ margin: 10, width: 220, height: 275 }}
                    >
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {pokeClass.name.substring(0, 1).toUpperCase() +
                            pokeClass.name.substring(1).toLowerCase()}
                        </Typography>
                      </CardContent>
                      <CardMedia
                        component="img"
                        height="200"
                        image={`${url}${id + 1}.png`}
                        alt={pokeClass.name}
                      />
                    </Card>
                  </Zoom>
                </Button>
              </Tooltip>
            </>
          );
        })}
      </Grid>
    </div>
  );
}

export default PokeDex;
