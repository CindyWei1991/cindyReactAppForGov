import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom'

const styles = theme => ({
    card: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: 'auto',
      [theme.breakpoints.up('sm')]: {
        marginRight: -8,
      },
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    typography: {
        fontSize: 16
    },
    cardHeader: {
        fontSize: 18,
        color: '#2196f3',
    }
  });
  class ExpandableCard extends React.Component {
    state = { expanded: false };
  
    handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
    };
  
    render() {
        const { classes } = this.props;
        const item = this.props.itemFromBoard;
        const index = this.props.indexFromBoard;
        const url = "https://www.healthcare.gov" + item.url;
        return (
            <Card className={classes.card}>
                
                <CardContent>
                    <h4 className={classes.cardHeader}><Link to={item.url}>{item.title}</Link></h4>
                    <h5>Link: <a href = {url}>{item.url}</a></h5>
                    <Typography className={classes.typography}> 
                        Expand to read the EXCERPT
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton
                    className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded,
                    })}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph className={classes.typography}>Excerpt:</Typography>
                        <Typography paragraph className={classes.typography} component={'span'}>
                        <div dangerouslySetInnerHTML={{ __html: item.excerpt}}></div>
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
        ExpandableCard.propTypes = {
            classes: PropTypes.object.isRequired,
        };
    }  
}   
export default withStyles(styles)(ExpandableCard);