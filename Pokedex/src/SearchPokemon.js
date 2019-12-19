import React from 'react';
import './App.css';
import './bootstrap.min.css';



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
    render(){
        return(
            <div className="row">
               <form className="searchFormByName col-4">
                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input type="name" className="form-control" id="" aria-describedby="" placeholder="Enter Pokemon's name" onChange={(text) => {this._loadPokemonsFromSearchText(text)}}/>
                    </div>
                </form>
                <form className="searchFormByName col-4">
                <div className="form-group">
                        <label htmlFor="">Number</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter Pokemon's number" onChange={(number) => this._loadPokemonsFromNumber(number.target.value)}/>
                    </div>
                </form>
                <form className="searchFormBySelect col-4">
                    <div className="form-group">
                        <label htmlFor="">Type</label>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown button
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Fire</a>
                                <a class="dropdown-item" href="#">Water</a>
                                <a class="dropdown-item" href="#">Grass</a>
                                <a class="dropdown-item" href="#">Flying</a>
                                <a class="dropdown-item" href="#">Fighting</a>
                                <a class="dropdown-item" href="#">Pyschic</a>
                                <a class="dropdown-item" href="#">Dark</a>
                                <a class="dropdown-item" href="#">Ghost</a>
                                <a class="dropdown-item" href="#">Normal</a>
                                <a class="dropdown-item" href="#">Fairy</a>
                                <a class="dropdown-item" href="#">Dragon</a>
                                <a class="dropdown-item" href="#">Steel</a>
                                <a class="dropdown-item" href="#">Electric</a>
                                <a class="dropdown-item" href="#">Rock</a>
                                <a class="dropdown-item" href="#">Ground</a>
                                <a class="dropdown-item" href="#">Ice</a>
                                <a class="dropdown-item" href="#">Poison</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
  
}

export default SearchPokemon;
