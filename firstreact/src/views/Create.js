import React, { Component } from 'react'
import { QuestionForm } from '../components'

export default class Create extends Component {
  render() {
    return (
      <div>
        <h1>Create A Question</h1>
        <QuestionForm></QuestionForm>
      </div>
    )
  }
}
