/*Table to show the number of pokemons by letter*/

import { DataGrid } from "@mui/x-data-grid";
import { Stack, Typography } from "@mui/material";
import { useApi } from "../hooks/useApi";
export const LetterTable = () => {
  const { pokemonsByLetter } = useApi();
  const columns = [
    {
      field: "id",
      headerName: "Letter",
      headerClassName: "super-app-theme--header",
      width: 250,
    },
    {
      field: "count",
      headerName: "Count",
      headerClassName: "super-app-theme--header",
      width: 496,
    },
  ];
  return (
    <>
      <Stack>
        <Typography variant="h4" align="center" sx={{ mb: 2, mt: 5 }}>
          Pokemon count by letter
        </Typography>
      </Stack>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={pokemonsByLetter}
          columns={columns}
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
    </>
  );
};
