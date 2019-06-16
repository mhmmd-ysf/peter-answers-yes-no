import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
// import DraftsIcon from '@material-ui/icons/Drafts';
import HomeIcon from '@material-ui/icons/Home'
import QuestionIcon from '@material-ui/icons/Help'

import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav">
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/create">
          <ListItem button>
            <ListItemIcon>
              <QuestionIcon />
            </ListItemIcon>
            <ListItemText primary="Create Question" />
          </ListItem>
        </Link>
      </List>
      {/* <Divider />
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List> */}
    </div>
  );
}

export default SimpleList;