import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 10
  },
  media: {
    height: 140,
  },
});


function MediaCard(props) {
  let { question, answer, img } = props
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { question }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { answer }
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}

export default MediaCard;