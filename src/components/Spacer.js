// This code is meant to be visibly hidden while imitating the fixed <Navbar/>'s responsiveness   //

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    flexGrow: 1,
    visibility: "hidden"
  },
  navbar: {
    background: "url(img/Villianous.jpg)",
    "background-repeat": "repeat",
    color: "white",
    "box-shadow": "0 14px 28px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.22)"
  },
  centering: {
    "text-align": "center"
  },
  typography: {
    "font-family": "'Condiment', cursive",
    "font-size": "35px",
    "text-shadow": "2px 2px 4px #000000"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  titleBox: {
    "padding-bottom": "0!important"
  },
  title: {
    "margin-top": "30px",
    "margin-bottom": "0"
  },
  instructionsBox: {
    "padding-top": "0!important",
    "padding-bottom": "0!important"
  },
  instructions: {
    "margin-top": "0",
    "font-size": "16px"
  },
  fontFixes: {
    color: "rgb(55,55,55)",
    "font-family": "Roboto",
    "font-weight": "100",
    "font-size": "20px",
    margin: "0"
  },
  scoreBoxes: {
    "margin-bottom": "15px",
    "padding-top": "0!important"
  },
  scoreText: {
    "font-family": "'Gochi Hand', cursive",
    "font-size": "18px",
    color: "white",
    "text-shadow": "2px 2px 4px #000000",
    background: "linear-gradient(to top, #cb2d3e, #ef473a)"
  }
});

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.navbar}>
        <Toolbar className={classes.centering}>
          <Grid container spacing={24}>
            <Grid item xs={12} className={classes.titleBox}>
              <Typography
                variant="h6"
                color="inherit"
                className={classes.typography}
              >
                <p className={classes.title}>Villianous The Clicky Game</p>
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.instructionsBox}>
              <Typography variant="h6" color="inherit">
                <p className={classes.instructions}>
                  Click any image to begin. Never click an image more than once!
                  Think you can beat the high score?
                </p>
              </Typography>
            </Grid>
            <Grid item xs={6} className={classes.scoreBoxes}>
              <Paper className={[classes.paper, classes.scoreText].join(" ")}>
                Current Score : 2
              </Paper>
            </Grid>
            <Grid item xs={6} className={classes.scoreBoxes}>
              <Paper className={[classes.paper, classes.scoreText].join(" ")}>
                Top Score : 2
              </Paper>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);
