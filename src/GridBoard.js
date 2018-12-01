import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Card from './Card.js'
const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop:8
  },
  paper: {
    width: 400,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class GuttersGrid extends React.Component {
  state = {
    spacing: '16',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };
  
  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    let items = this.props.itemsFromParent;
    return (
      <div className="mynavbar">
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            {items.map((item, index) => (
              <Grid key={index} item>
                <Paper className={classes.paper}>
                  <Card  itemFromBoard = {item}/>
                </Paper>
              </Grid>
            ))};
          </Grid>
        </Grid>
      </Grid>
      </div>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);
