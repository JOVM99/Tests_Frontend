/*Card to show the information of the selected pokemon*/

import {
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Grid,
} from "@mui/material";

export const PokemonCard = (pokemonsDetails) => {
  const {
    abilities,
    base_experience,
    height,
    forms,
    weight,
    species,
    sprites,
    moves,
    name,
  } = pokemonsDetails;

  return (
    <Card sx={{ width: "auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ width: 151, ml: "40%" }}
          image={sprites.other.dream_world.front_default}
          alt="imagen"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Typography variant="h6">Moves:</Typography>
            {moves.map((move) => move.move.name + ", ")}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={4}>
            <Typography variant="h6">Height: {height}</Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="h6">Weight: {weight}</Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="h6">
              Abilities: {abilities.map((a) => " " + a.ability.name)}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="h6">
              Forms: {forms.map((f) => f.name)}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="h6">
              Base Experience: {base_experience}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="h6">Species: {species.name}</Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
