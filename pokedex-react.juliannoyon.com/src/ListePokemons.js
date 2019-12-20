import React from 'react';
import './App.css';
import './bootstrap.min.css';
import { getPokemonFromDataBaseForAll } from './PokemonAPI.js'



class ListePokemons extends React.Component{
    constructor(props){
		super(props);
		this.state = {
            view:[],
            pokemonArray:[]
		}
    }
    render(){
        return(
            <div>
                <ul className="itemList">
                    {this.state.pokemonArray.map(function(item, i){
                        return(<li class="item" key={i}>
                            <img className="item-img" src={item.sprites['front_default']}/>
                            <p >#{item.id} {item.name}</p>
                            <div className="type">
                                {}    
                            </div>    
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
  
}

export default ListePokemons;
