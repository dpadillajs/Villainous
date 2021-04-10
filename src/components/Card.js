import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const styles = {
  card: {
    maxWidth: 400
  }
};

function ImgMediaCard(props) {
  return (
    <Card className={props.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.alt}
          image={props.imageurl}
          data-clicked={props.clicked}
          onClick={() => props.clickedImage(props.clicked, props.id)}
        />
      </CardActionArea>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgMediaCard);
