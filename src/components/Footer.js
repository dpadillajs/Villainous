import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  box: {
    padding: "0!important"
  },
  text: {
    display: "flex",
    "justify-content": "space-between",
    padding: "0 20px",
    "font-family": "Roboto",
    "font-weight": "bolder",
    "text-shadow": "2px 2px 4px rgb(55,55,55)",
    color: "white",
    "font-size": "16px",
    "border-radius": "0",
    background: "transparent",
    "box-shadow": "none",
    "border-top": "solid white 1px"
  },
  margin: {
    "margin-top": "35px"
  },
  reformatBox: {
    width: "100vw",
    "margin-left": "0",
    "margin-right": "0"
  },
  aFix: {
    color: "white"
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={[classes.root, classes.margin].join(" ")}>
      <Grid container spacing={24} className={classes.reformatBox}>
        <Grid item xs={12} className={classes.box}>
          <Paper className={[classes.paper, classes.text].join(" ")}>
            <p>
              DAVID PADILLA &nbsp;&nbsp;
              <a
                className={classes.aFix}
                href="https://github.com/dpadillajs/Villianous"
              >
                <i className="fab fa-github" />
              </a>
            </p>
            <p>UNC CODING BOOTCAMP</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
