import React from "react";

import Button from "@mui/material/Button";
import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles(() => ({
  menuButton: {
    marginRight: useTheme().spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={useTheme()}>
      <AppBar position="fixed">
        <Container>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Web Blog
            </Typography>
            <Box mr={3}>
              <Button
                color="inherit"
                variant="outlined"
                onClick={handleClickOpen}
              >
                Log in
              </Button>

              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Log in</DialogTitle>
                <DialogContent>
                  <DialogContentText> Log in to see videos</DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Adress"
                    type="email"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="pass"
                    label="Password"
                    type="password"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Log in
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Button color="secondary" variant="contained">
              Sign up
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
