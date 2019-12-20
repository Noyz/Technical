import React from 'react';
import './App.css';
import './bootstrap.min.css';
import SearchPokemon from './SearchPokemon';
import PokemonDetails from './PokemonDetails.js'




class Pokedex extends React.Component{

    checkTypes(item){
        if(!item.types[1]){
            return(
            <div className="">
                    <p className={item.types[0].type.name +" type"}>{item.types[0].type.name}</p> 
            </div>
            ) 
        }else{
            return(
                <div className="">
                        <p className={item.types[0].type.name +" type"}>{item.types[0].type.name}</p>
                        <p className={item.types[1].type.name +" type type2"}>{item.types[1].type.name}</p>
                </div>
            )
        }
    }
    _gotoPokemonDetails(item){
        this.props.handlerView(<PokemonDetails pokemon={item}/>)
    }
    render(){
        var that = this;
        return (
            <div>
                <div className="row">
                    <div className="searchView container">
                       <SearchPokemon pokemonArray={this.props.pokemonArray} originalListe={this.props.originalListe}  rooting={this.props.rooting} handler={this.handler} handlerPokemon={this.props.handlerPokemon}/>
                    </div>
                </div>
                <div className="row">
                    <div className="pokemonView col-12">
                            <ul className="itemList">
                                {this.props.pokemonArray.map(function(item, i){
                                    return(
                                        <li className="item itemPokemon" key={i} onClick={() => {that._gotoPokemonDetails(item)}}>
                                            <img className="item-img" alt="img-pokemon"src={item.sprites['front_default']}/>
                                            <p className="name">#{item.id} {item.name}</p>
                                            {that.checkTypes(item)}
                                        </li>
                                    )
                                })}
                        </ul>
                    </div>
                </div>
            </div>
      );
    }
  
}

export default Pokedex;
