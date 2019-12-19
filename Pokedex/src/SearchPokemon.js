import React from 'react';
import './App.css';
import './bootstrap.min.css';
import PokemonDetails from './PokemonDetails.js'




class SearchPokemon extends React.Component{
 
    _loadPokemonsFromSearchText(text){
        var texte = "^" + text.target.value;
		var newPokemonArray = [];
        var str1 = RegExp(texte);
		this.props.originalListe.forEach(function(element) {
  			if(str1.test(element.name)){
                newPokemonArray.push(element)
              }
        });
        if(texte !== "^"){
            this.props.handlerPokemon(newPokemonArray);
            setTimeout(() => {
                this.props.rooting("pokedex");
            }, 10);
        
        }else{
            this.props.handlerPokemon(this.props.originalListe);
            setTimeout(() => {
                this.props.rooting("pokedex");
            }, 50);
        }
    }
    _loadPokemonsFromNumber(number){
        var texte = "^" + number;
		var newPokemonArray = [];
        var str1 = RegExp(texte);
		this.props.originalListe.forEach(function(element) {
  			if(str1.test(element.id)){
                newPokemonArray.push(element)
              }
        });
		this.props.handlerPokemon(newPokemonArray);
        setTimeout(() => {
            this.props.rooting("pokedex");
        }, 10);
		
    }
    _loadPokemonsFromType(type){
        var texte = type.target.value;
		var newPokemonArray = [];
		this.props.originalListe.forEach(function(element) {
  			if(element.types[1] !== undefined){
                if(element.types[0].type.name === texte || element.types[1].type.name === texte){
                    newPokemonArray.push(element)
                }
              }else{
                  if(element.types[0].type.name === texte){
                    newPokemonArray.push(element)
                  }
              }
        });
		this.props.handlerPokemon(newPokemonArray);
        setTimeout(() => {
            this.props.rooting("pokedex");
        }, 10);
		
    }
    _gotoPokemonDetails(item){
        this.props.handlerView(<PokemonDetails pokemon={item}/>)
    }
    render(){
        return(
            <div className="row">
                <form className="searchFormByName col-4">
                    <div className="form-group">
                        <label htmlFor="">Number</label>
                        <input type="number" className="w-30 form-control" id="exampleInputPassword1" placeholder="#" onChange={(number) => this._loadPokemonsFromNumber(number.target.value)}/>
                    </div>
                </form>
               <form className="searchFormByName col-4">
                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input type="name" className="form-control" id="" aria-describedby="" placeholder="Enter Pokemon's name" onChange={(text) => {this._loadPokemonsFromSearchText(text)}}/>
                    </div>
                </form>
                <form className="searchFormBySelect col-4">
                    <div className="form-group">
                        <label htmlFor="">Type</label>
                        <div>
                            <select onChange={(value) => {this._loadPokemonsFromType(value)}}>
                                <option className="dropdown-item" value="fire" href="#">Fire</option>
                                <option className="dropdown-item" value="water" href="#">Water</option>
                                <option className="dropdown-item" value="grass" href="#">Grass</option>
                                <option className="dropdown-item" value="flying" href="#">Flying</option>
                                <option className="dropdown-item" value="fighting" href="#">Fighting</option>
                                <option className="dropdown-item" value="pyschic" href="#">Pyschic</option>
                                <option className="dropdown-item" value="dark" href="#">Dark</option>
                                <option className="dropdown-item" value="ghost" href="#">Ghost</option>
                                <option className="dropdown-item" value="normal" href="#">Normal</option>
                                <option className="dropdown-item" value="fairy" href="#">Fairy</option>
                                <option className="dropdown-item" value="dragon" href="#">Dragon</option>
                                <option className="dropdown-item" value="steel" href="#">Steel</option>
                                <option className="dropdown-item" value="electric" href="#">Electric</option>
                                <option className="dropdown-item" value="rock" href="#">Rock</option>
                                <option className="dropdown-item" value="ground" href="#">Ground</option>
                                <option className="dropdown-item" value="ice" href="#">Ice</option>
                                <option className="dropdown-item" value="poison" href="#">Poison</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
  
}

export default SearchPokemon;
