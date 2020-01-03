import React from 'react';
import './App.css';
import './bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'





class SearchPokemon extends React.Component{
    constructor(props){
		super(props)
    
		this.state = {
            cache:[]
        }
    }
    _loadPokemonsFromSearchText(text){
        var texte = "^" + text.target.value;
		var newPokemonArray = [];
        var str1 = RegExp(texte);
		this.props.pokemonToDisplay.forEach(function(element) {
  			if(str1.test(element.name)){
                newPokemonArray.push(element)
              }
        });
        if(texte !== "^"){
            this.props.handlerPokemon(newPokemonArray);
        }else{
            this.props.handlerPokemon(this.props.pokemonToDisplay);
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
    
    _loadPokemonsFromNumber(number){
        var texte = "^" + number;
		var newPokemonArray = [];
        var str1 = RegExp(texte);
		this.props.pokemonToDisplay.forEach(function(element) {
  			if(str1.test(element.id)){
                newPokemonArray.push(element)
              }
        });
		if(texte !== "^"){
            this.props.handlerPokemon(newPokemonArray);
        }else{
            this.props.handlerPokemon(this.props.pokemonToDisplay);
        }
    }
    handlerDefault(event){
      event.preventDefault();
    }
    _loadPokemonsFromType(type){
        var texte = type;
        var newPokemonArray = [];
		this.props.pokemonToDisplay.forEach(function(element) {
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
    }
    _loadPokemonsByGeneration(string){
        var pokemons = this.props.originalListe.slice();
        switch(string){
            case "Gen 1" : 
                this.props.handlerPokemon(pokemons.splice(1, 151));
            break;
            case "Gen 2" : 
                this.props.handlerPokemon(pokemons.splice(152, 250));
            break;
            case "Gen 3" : 
                this.props.handlerPokemon(pokemons.splice(251, 386));
            break;
            case "Gen 4" : 
                this.props.handlerPokemon(pokemons.splice(387, 493));
            break;
            case "Gen 5" : 
                this.props.handlerPokemon(pokemons.splice(494, 649));
            break;
            default:
                return
        }
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
                        
                            <DropdownButton id="dropdown-item-button typeMenu" title="Type">
                                <Dropdown.Item as="button" className="typeListe" onClick={(e) => {e.preventDefault();this._loadPokemonsFromType(e.target.innerHTML)}}>fire</Dropdown.Item>
                                <Dropdown.Item as="button" className="typeListe" onClick={(e) => {e.preventDefault();this._loadPokemonsFromType(e.target.innerHTML)}}>water</Dropdown.Item>
                                <Dropdown.Item as="button" className="typeListe" onClick={(e) => {e.preventDefault();this._loadPokemonsFromType(e.target.innerHTML)}}>grass</Dropdown.Item>
                                <Dropdown.Item as="button" className="typeListe" onClick={(e) => {e.preventDefault();this._loadPokemonsFromType(e.target.innerHTML)}}>flying</Dropdown.Item>
                                <Dropdown.Item as="button" className="typeListe" onClick={(e) => {e.preventDefault();this._loadPokemonsFromType(e.target.innerHTML)}}>fighting</Dropdown.Item>
                                <Dropdown.Item as="button" className="typeListe" onClick={(e) => {e.preventDefault();this._loadPokemonsFromType(e.target.innerHTML)}}>pyschic</Dropdown.Item>
                                <Dropdown.Item as="button" className="typeListe" onClick={(e) => {e.preventDefault();this._loadPokemonsFromType(e.target.innerHTML)}}>dark</Dropdown.Item>
                                <Dropdown.Item as="button" className="typeListe" onClick={(e) => {e.preventDefault();this._loadPokemonsFromType(e.target.innerHTML)}}>ghost</Dropdown.Item>
                                <Dropdown.Item as="button" className="typeListe" onClick={(e) => {e.preventDefault();this._loadPokemonsFromType(e.target.innerHTML)}}>normal</Dropdown.Item>
                                <Dropdown.Item as="button" className="typeListe" onClick={(e) => {e.preventDefault();this._loadPokemonsFromType(e.target.innerHTML)}}>fairy</Dropdown.Item>
                                <Dropdown.Item as="button" className="typeListe" onClick={(e) => {e.preventDefault();this._loadPokemonsFromType(e.target.innerHTML)}}>dragon</Dropdown.Item>
                                <Dropdown.Item as="button" className="typeListe" onClick={(e) => {e.preventDefault();this._loadPokemonsFromType(e.target.innerHTML)}}>steel</Dropdown.Item>
                                <Dropdown.Item as="button" className="typeListe" onClick={(e) => {e.preventDefault();this._loadPokemonsFromType(e.target.innerHTML)}}>electric</Dropdown.Item>
                                <Dropdown.Item as="button" className="typeListe" onClick={(e) => {e.preventDefault();this._loadPokemonsFromType(e.target.innerHTML)}}>rock</Dropdown.Item>
                                <Dropdown.Item as="button" className="typeListe" onClick={(e) => {e.preventDefault();this._loadPokemonsFromType(e.target.innerHTML)}}>ground</Dropdown.Item>
                                <Dropdown.Item as="button" className="typeListe" onClick={(e) => {e.preventDefault();this._loadPokemonsFromType(e.target.innerHTML)}}>ice</Dropdown.Item>
                                <Dropdown.Item as="button" className="typeListe" onClick={(e) => {e.preventDefault();this._loadPokemonsFromType(e.target.innerHTML)}}>poison</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>
                </form>
                <div className="generation col-12">
                    <button type="button" className="btn btn-light btn-sm genBtn" onClick={(e) => {this.props.loadDataGen(e.target.innerHTML)}}>Gen 1</button>
                    <button type="button" className="btn btn-light btn-sm genBtn" onClick={(e) => {this.props.loadDataGen(e.target.innerHTML)}}>Gen 2</button>
                    <button type="button" className="btn btn-light btn-sm genBtn" onClick={(e) => {this.props.loadDataGen(e.target.innerHTML)}}>Gen 3</button>
                    <button type="button" className="btn btn-light btn-sm genBtn" onClick={(e) => {this.props.loadDataGen(e.target.innerHTML)}}>Gen 4</button>
                    <button type="button" className="btn btn-light btn-sm genBtn" onClick={(e) => {this.props.loadDataGen(e.target.innerHTML)}}>Gen 5</button>
                    <button type="button" className="btn btn-light btn-sm genBtn" onClick={(e) => {this.props.loadDataGen(e.target.innerHTML)}}>All Gen</button>
                </div>
            </div>
        )
    }
  
}

export default SearchPokemon;
