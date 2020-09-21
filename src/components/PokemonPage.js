import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemonArray: [], 
    searchValue: ""
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(resp=>resp.json())
    .then(data=>{
      this.setState(()=>({
        pokemonArray: data
      }))
    })
  }

  searchHandler = (e) => {
    e.persist()
    this.setState(()=>({
      [e.target.name]: e.target.value
    }))
  }

  filterPokemon = () => {
    return this.state.pokemonArray.filter(poke => poke.name.toLocaleLowerCase().includes(this.state.searchValue.toLocaleLowerCase()))
  }

  submitHandler = (newPokemon) => {
    console.log(newPokemon)
    const configObj = {
      method: 'POST', 
      headers: {'Content-Type': 'application/json', 'Accepts': 'application/json'},
      body: JSON.stringify(newPokemon)
    }
    fetch('http://localhost:3000/pokemon', configObj)
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data)
      const newArray = [...this.state.pokemonArray, data]
      this.setState(()=>({
        pokemonArray: newArray
      }))
    })

  }


  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submitHandler={this.submitHandler}/>
        <br />
        <Search searchHandler={this.searchHandler} searchValue={this.state.searchValue} />
        <br />
        <PokemonCollection pokemon={this.filterPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
