import React, { Component } from 'react'
import { Box, Grid } from '@material-ui/core'
import { SimpleCard } from '../components'

export default class Home extends Component {
  render() {
    let { questions } = this.props
    return (
      <Box p={1} style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          questions.map((item, index) => {
            return (
              <Grid key={index} item xs={3}>
                <SimpleCard question={item.question} answer={item.answer} img={item.img}></SimpleCard>
              </Grid>
            )
          })
        }
      </Box>
    )
  }
}
