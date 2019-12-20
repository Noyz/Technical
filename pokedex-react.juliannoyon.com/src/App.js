import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Home from './Home.js'
import Pokedex from './Pokedex.js'

import { getPokemonFromDataBaseForAll } from './PokemonAPI.js'
import LazyLoad from 'react-lazyload';




class App extends React.Component{
  constructor(props){
		super(props)
    this.handlerView = this.handlerView.bind(this)
    this.handlerPokemon = this.handlerPokemon.bind(this)
		this.rooting = this.rooting.bind(this)
		this.state = {
      view:<Home />,
      pokemonArray:[],
      originalListe:[]
		}
  }
  rooting(e){
    switch(e) {
        case "pokedex":
          console.log(this.state.pokemonArray)
          this.handlerView(<Pokedex pokemonArray={this.state.pokemonArray} originalListe={this.state.originalListe} rooting={this.rooting} handlerPokemon={this.handlerPokemon} handlerView={this.handlerView}/>)  
          break;
        case "teams":
          break;
        default:
            return this.handlerView(<Home />)
    }
  }
  componentWillMount(){
    this.loadData()
  }
  loadData(){
    var newPokemonArray = [];
    for(var i = 152; i < 300; i++){
        getPokemonFromDataBaseForAll(i).then(data => newPokemonArray.push(data));
    }
    setTimeout(() => {
        this.setState({
            pokemonArray:newPokemonArray,
            originalListe:newPokemonArray

        })
        this.handlerPokemon(newPokemonArray);
    }, 1000);
}
  handlerView(obj) {
    this.setState({
      view: obj
    });
  }
	handlerPokemon(array) {
	    this.setState({
        pokemonArray:array
	    });
  }
  render(){
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light">
              <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <button id="teams" className="btn-view"  onClick={(e) => {this.rooting(e)}}>Home</button>
                  </li>
                  <li className="nav-item active">
                    <button id="pokedex" className="btn-view" onClick={(e) => {this.rooting(e.target.id)}}>Pokedex <span className="sr-only">(current)</span></button>
                  </li>
                </ul>
                </div>
            </nav>
            <div className="container-fluid">
            <LazyLoad height={200}>
              {this.state.view}
              </LazyLoad>
            </div>
      </div>
    );
  }
}

export default App;
