import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";

function App() {
  return (
    <Grid
      component="div"
      direction="column"
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack
        direction="row"
        spacing={4}
        sx={{
          border: 2,
        }}
      >
        <Box>Logo</Box>
        <Box component="nav">
          <List
            component="ul"
            sx={{
              display: "flex",
            }}
          >
            <ListItem>HOme</ListItem>
            <ListItem>HOme</ListItem>
            <ListItem>HOme</ListItem>
          </List>
        </Box>
        <Button>Login</Button>
      </Stack>
      <Typography>Hello world</Typography>
    </Grid>
  );
}

export default App;
