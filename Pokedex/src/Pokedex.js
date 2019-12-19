import React from 'react';
import './App.css';
import './bootstrap.min.css';
import SearchPokemon from './SearchPokemon';


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
                        <p className={item.types[1].type.name +" type"}>{item.types[1].type.name}</p>
                </div>
            )
        }
    }
    render(){
        var that = this;
        return (
            <div>
                <div className="row">
                    <div className="searchView">
                       <SearchPokemon pokemonArray={this.props.pokemonArray} originalListe={this.props.originalListe}  rooting={this.props.rooting} handler={this.handler} handlerPokemon={this.props.handlerPokemon}/>
                    </div>
                </div>
                <div className="row">
                    <div className="pokemonView">
                            <ul className="itemList">
                                {this.props.pokemonArray.map(function(item, i){

                                    return(<li className="item" key={i}>
                                        <img className="item-img" alt="img-pokemon"src={item.sprites['front_default']}/>
                                        <p className="name">#{item.id} {item.name}</p>
                                        {that.checkTypes(item)}
                                    </li>)
                                })}
                        </ul>
                    </div>
                </div>
            </div>
      );
    }
  
}

export default Pokedex;
