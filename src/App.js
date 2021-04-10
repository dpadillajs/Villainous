// Notify User if Guessed Correctly

import React from "react";
import './App.css';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import Spacer from "./components/Spacer";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Grid from "@material-ui/core/Grid";
import villains from "./villain.json";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  centering: {
    display: "flex",
    "justify-content": "center",
    "margin-top": "25px"
  },
  centeringImgs: {
    "justify-content": "center"
  }
});

const stickyFooter = {
  minHeight: "calc(100vh - 75px)"
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      hiScore: localStorage.getItem("HighScore")
        ? localStorage.getItem("HighScore")
        : 10,
      images: villains,
      animatedText: "",
      newHiScore: ""
    };

    this.clickedImage = (imageBoolean, id) => {
      if (!imageBoolean) {
        this.shuffle(villains);

        this.setState(prevState => ({
          score: prevState.score + 1,
          animatedText: "rightAnswer"
        }));

        setTimeout(
          function() {
            this.setState(() => ({
              animatedText: ""
            }));
          }.bind(this),
          250
        );

        if (this.state.score >= this.state.hiScore) {
          this.setState(prevState => {
            localStorage.setItem("HighScore", prevState.score);
            return {
              hiScore: localStorage.getItem("HighScore")
            };
          });

          this.setState(prevState => ({
            newHiScore: "rightAnswer"
          }));

          setTimeout(
            function() {
              this.setState(() => ({
                newHiScore: ""
              }));
            }.bind(this),
            250
          );
        }
        // console.log(imageBoolean);
        // console.log(id);
        this.state.images.map(villian => {
          if (villian.id === id) {
            villian.clicked = true;
            // console.log(villian);
            // console.log(this.state.images);
          }
          return villian;
        });
      } else {
        this.shuffle(villains);

        this.state.images.map(villian => {
          villian.clicked = false;
          return villian;
        });

        this.setState(() => {
          return {
            score: 0,
            animatedText: "wrongAnswer"
          };
        });

        setTimeout(
          function() {
            this.setState(() => ({
              animatedText: ""
            }));
          }.bind(this),
          250
        );
        // console.log(this.state.images);
      }
    };
  }

  shuffle(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  render() {
    return (
        <>
          <div style={stickyFooter}>
            <Navbar
                score={this.state.score}
                hiScore={this.state.hiScore}
                animation={this.state.animatedText}
                newHiScore={this.state.newHiScore}
            />
            <Spacer/>
            <div className={this.props.classes.centering}>
              <Grid
                  container
                  item
                  xs={12}
                  spacing={24}
                  className={this.props.classes.centeringImgs}
              >
                <Grid container item xs={12} spacing={24}>
                  {this.state.images.map(villian => {
                    return (
                        <>
                          <Grid item xs={3} className="grid-card-padding">
                            <Card
                                key={villian.id}
                                id={villian.id}
                                alt={villian.alt}
                                imageurl={villian.image}
                                clicked={villian.clicked}
                                clickedImage={this.clickedImage}
                            />
                          </Grid>
                        </>
                    );
                  })}
                </Grid>
              </Grid>
            </div>
          </div>
          <Footer/>
        </>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
