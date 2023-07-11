/*Table to show the list of pokemons*/

import { DataGrid } from "@mui/x-data-grid";
import { useApi } from "../hooks/useApi";
import {
  Stack,
  TextField,
  Typography,
  Autocomplete,
  Grid,
} from "@mui/material";
import { PokemonCard } from "./PokemonCard";
import Swal from "sweetalert2";
import { LetterTable } from "./LetterTable";

export const Table = () => {
  const {
    pokemons,
    pokemons2,
    rowSelectionModel,
    value,
    pokemonsDetails,
    setValue,
    handleChange,
  } = useApi();

  if (pokemons2.length === 0 && value !== "" && value !== null) {
    Swal.fire("Error!", "No pokemon with that name found", "error");
  }
  const columns = [
    {
      field: "id",
      headerName: "ID",
      headerClassName: "super-app-theme--header",
      width: 250,
    },
    {
      field: "name",
      headerName: "Name",
      headerClassName: "super-app-theme--header",
      width: 496,
    },
  ];
  return (
    <>
      <Stack>
        <Typography variant="h3" align="center" sx={{ mb: 1, mt: 5 }}>
          Pokemon List
        </Typography>
      </Stack>
      <Grid container spacing={3} marginTop={5}>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            value={value}
            onChange={(event, newValue = "") => {
              setValue(newValue);
            }}
            options={pokemons.map((option) => option.name)}
            renderInput={(params) => <TextField {...params} label="Search" />}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "50px",
              },
              width: "350px",
              padding: 1,
            }}
          />
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={pokemons2}
              columns={columns}
              onRowSelectionModelChange={handleChange}
              rowSelectionModel={rowSelectionModel}
              sx={{
                "& .super-app-theme--header": {
                  backgroundColor: "rgb(224, 255, 255)",
                },
                width: "100%",
              }}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          {pokemonsDetails.length === 0 ? (
            <div></div>
          ) : (
            <PokemonCard {...pokemonsDetails} />
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <LetterTable />
        </Grid>
      </Grid>
    </>
  );
};
