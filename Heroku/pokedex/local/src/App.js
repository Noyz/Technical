import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Home from './Home.js'
import Pokedex from './Pokedex.js'
import PokemonDetails from './PokemonDetails.js'
import { getPokemonFromDataBase } from './PokemonAPI.js'





class App extends React.Component{
  constructor(props){
		super(props)
    this.handlerPokemon = this.handlerPokemon.bind(this)
    this.handlerView = this.handlerView.bind(this)
    this.handlerDetails = this.handlerDetails.bind(this)
    this.loadDataGen = this.loadDataGen.bind(this)
		this.state = {
      view:'home',
      pokemonArray:[],
      originalListe:[],
      thisPokemon:[],
      generation:[],
      pokemonToDisplay:[]
		}
  }
  findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
  }

  componentWillMount(){
    this.loadDataGen("Gen 1");
  }
  sortPokemon(generation, iteration1, iteration2, rangeMin, rangeMax, timeout){
    var newPokemonArray = [];
    var generationArray = this.state.generation.slice();
    var currentArrayPokemon = this.state.originalListe.slice();
    var pokemonToDisplay = [];
    if(this.state.generation.indexOf(generation) === -1){
      for(iteration1 = rangeMin;iteration1 < rangeMax;iteration1++){
        getPokemonFromDataBase(iteration1).then(data => newPokemonArray.push(data), generationArray.push(generation));
        getPokemonFromDataBase(iteration1).then(data => currentArrayPokemon.push(data));
        getPokemonFromDataBase(iteration1).then(data => pokemonToDisplay.push(data));
      }
      
        setTimeout(() => {
          this.setState({
            pokemonArray:newPokemonArray,
            originalListe:currentArrayPokemon,
            generation:generationArray,
            pokemonToDisplay:pokemonToDisplay
          });
        }, timeout);
    }else{
      for(iteration2 = rangeMin - 1;iteration2 < rangeMax - 1;iteration2++){
        newPokemonArray.push(this.state.originalListe[iteration2]);
        pokemonToDisplay.push(this.state.originalListe[iteration2]);
      }
      this.setState({
        pokemonArray:newPokemonArray,
        pokemonToDisplay:pokemonToDisplay
      });
    }
  }

  loadDataGen(generation){
    switch (generation) {
      case "Gen 1": 
        this.sortPokemon("Gen 1", 'a', 'b', 1, 152, 400);
      break;
      case "Gen 2":  
        this.sortPokemon("Gen 2", 'c', 'd', 152, 252, 1000);
      break;
      case "Gen 3":  
        this.sortPokemon("Gen 3", 'e', 'f', 252, 387, 1200);
        break;
      case "Gen 4":  
        this.sortPokemon("Gen 4", 'g', 'h', 387, 494, 1000);
      break;
      case "Gen 5":  
        this.sortPokemon("Gen 5", 'i', 'j', 494, 650, 1000);
      break;
      default:
        break;
    }
  }
	handlerPokemon(array) {
	    this.setState({
        pokemonArray:array
      });
  }
  handlerCache(array) {
    this.setState({
      cache:array
    });
}
  handlerView(string) {
    this.setState({
      view:string
    });
  }
  handlerDetails(object) {
    this.setState({
      thisPokemon:object
    });
  }
  render(){
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button type="button" className="btn btn-primary" style={{marginRight:'10px'}} onClick={(e) => {this.setState({view:"home"})}}>Home</button>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <button type="button" className="btn btn-primary" onClick={(e) => {this.setState({view:"pokedex"})}}>Pokedex</button>
              </li>
              
            </ul>
          </div>
        </nav>
            <div className="container-fluid">
              {(() => {
                switch (this.state.view) {
                  case "home":   return <Home />
                  case "pokedex": return <Pokedex pokemonToDisplay={this.state.pokemonToDisplay} loadDataGen={this.loadDataGen} handlerCache={this.handlerCache} pokemonArray={this.state.pokemonArray} originalListe={this.state.originalListe} handlerView={this.handlerView} handlerPokemon={this.handlerPokemon} handlerDetails={this.handlerDetails}/>
                  case "pokemonDetails" : return <PokemonDetails originalListe={this.state.originalListe} handlerPokemon={this.handlerPokemon} thisPokemon={this.state.thisPokemon}/>
                  default:return;
                }
              })()}
            </div>
      </div>
    );
  }
}

export default App;
