/* Application footer */
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 10 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Created by Javier Viera
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
