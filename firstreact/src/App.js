// Packages
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, /* Link, */ Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import db from './api/firebase'
// Local Essentials
import store from './store'
import './App.css';
// Material Components
import { Container } from '@material-ui/core'
// Local Components
import { Navbar, List } from './components'
import { Home, Create } from './views'

class App extends Component {
  constructor() {
    super()
    this.state = {
      questions: []
    }
  }

  render() {
    let { questions } = this.state
    return (
      <Provider store={store}>
        <Router>
          <Navbar></Navbar>
          <div style={{display: "flex", flexDirection: "row"}}>
            <List></List>
            <Container maxWidth="lg" style={{ 'backgroundColor': 'white' }}> 
              <Switch>
                <Route path="/" exact component={() => <Home questions={questions} />} />
                <Route path="/create" component={() => <Create />}/>
              </Switch>
            </Container>
          </div>
        </Router>
      </Provider>
    );
  }
  componentDidMount() {
    db.collection('questions').orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        let data = []
        snapshot.docs.forEach(item => {
          console.log({ item })
          console.log(item.data())
          data.push(item.data())
        })
        this.setState({
          questions: data
        })
      })
  }
}

export default App;