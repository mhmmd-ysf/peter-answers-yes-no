import React from 'react';
import firebase from 'firebase'
import db from '../api/firebase'
import axios from 'axios'
import swal from 'sweetalert'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button, CircularProgress } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    // flexWrap: 'wrap',
    flexDirection: 'column',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
}));

function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    question: '',
  });
  const [isLoading, setIsLoading] = React.useState(false)

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const submitQuestion = () => {
    console.log(values)
    setIsLoading(true)
    let input = {
      question: values.question,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }
    let ans = ''
    let img = ''
    axios({
      method: 'get',
      url: 'https://yesno.wtf/api'
    })
      .then(({ data }) => {
        input.answer = data.answer
        input.img = data.image
        ans = data.answer
        img = data.image
        return db.collection('questions').add(input)
      })
      .then(ref => {
        setIsLoading(false)
        if (ans === 'yes') {
          swal({
            title: 'Yesss!!1!',
            text: 'Yay~',
            icon: img
          })
        } else {
          swal({
            title: 'The answer is NO!',
            text: 'No no no',
            icon: img
          })
        }
        withRouter(({ history }) => { history.push('/') })
      })
      .catch(err => {
        setIsLoading(false)
        console.log({ err })
      })
  }

  return (
    <div>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Create a yes/no question"
          className={classes.textField}
          onChange={handleChange('question')}
          margin="normal"
        />
        {isLoading ?
          // <Button variant="contained" color="primary" onClick={submitQuestion}>Loading</Button>
          <CircularProgress></CircularProgress>
          :
          <Button variant="contained" color="primary" onClick={submitQuestion}>Sumbit</Button>
        }
      </form>
    </div>
  );
}

export default TextFields;