import {
  Container,
  Paper,
  Typography,
  Grid,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  CardActions,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
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

const useStyles = makeStyles(() => ({
  mainFeaturePost: {
    position: "relative",
    color: useTheme().palette.common.white,
    marginBottom: useTheme().spacing(2),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: "rgba(0,0,0,.3)",
  },
  mainFeaturePostContent: {
    position: "relative",
    padding: useTheme().spacing(6),
    marginTop: useTheme().spacing(8),
  },
  cardMedia: {
    paddingTop: "56%",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardGrid: {
    marginTop: useTheme().spacing(4),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Grids() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <main>
        <Paper
          className={classes.mainFeaturePost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
        >
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturePostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="white"
                    gutterBottom
                  >
                    Web Blog
                  </Typography>
                  <Typography component="h5" color="white" paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati cum magni repellendus explicabo facere atque sit
                    earum eaque vel natus, perferendis fugit adipisci voluptas?
                    Illum!
                  </Typography>
                  <Button variant="contained" color="secondary">
                    hallo
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Web Blog
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
              sapiente culpa repellendus non labore. Suscipit quaerat porro
              velit, eligendi dolorem tempora, amet quidem aperiam accusantium
              saepe repellendus voluptate numquam odit.
            </Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={3} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Start Now
                  </Button>
                </Grid>

                <Grid item>
                  <Button variant="outlined" color="primary">
                    Learn more
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Blog post
                    </Typography>
                    <Typography>Lorem ipsum, dolor sit amet</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <LayersIcon />
                    <PlayCircleFilledIcon />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon />}
          />
        </BottomNavigation>
      </footer>
    </>
  );
}
