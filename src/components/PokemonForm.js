import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: "", 
    hp: "",
    frontUrl: "",
    backUrl: ""
  }

  changeHandler = (e) => {
    e.persist()
    this.setState(()=>({
      [e.target.name]: e.target.value
    }))
  }

  submitHandler = (e) => {
    e.preventDefault()
    const newPoke = {
      name: this.state.name,
      hp: this.state.hp, 
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    }
    this.props.submitHandler(newPoke)
    this.setState(()=>({
      name: "", 
      hp: "",
      frontUrl: "",
      backUrl: ""
    }))
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.submitHandler}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" onChange={this.changeHandler} value={this.state.name} placeholder="Name" name="name" />
            <Form.Input fluid label="hp" onChange={this.changeHandler} value={this.state.hp} placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" onChange={this.changeHandler} value={this.state.frontUrl} placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" onChange={this.changeHandler} value={this.state.backUrl} placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
