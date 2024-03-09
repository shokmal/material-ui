import { Typography, Box, TextField } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import LayersIcon from "@mui/icons-material/Layers";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { PlayCircle } from "@mui/icons-material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FolderIcon from "@mui/icons-material/Folder";
import CssBaseline from "@mui/material/CssBaseline";

export default function Registration() {
  return (
    <main>
      <CssBaseline />
      <Box
        maxWidth="415px"
        width="100%"
        bgcolor="#ffffff"
        boxShadow="0px 6px 50px rgba(217, 229, 225, 0.7)"
        borderRadius="20px"
        paddingLeft="30px"
        paddingRight="30px"
        paddingTop="38px"
        paddingBottom="38px"
      >
        <Typography
          variant="h1"
          color="#30507d"
          fontWeight="500"
          fontSize="20px"
          lineHeight="23px"
          marginBottom="38px"
        >
          Регистрация
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Имя"
          type="password"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="firstName"
          label="Фамилия"
          type="password"
          fullWidth
        />
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

        <Button variant="contained" fullWidth>
          Регистрация
        </Button>
      </Box>
    </main>
  );
}
