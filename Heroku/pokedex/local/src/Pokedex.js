import React from 'react';
import './App.css';
import './bootstrap.min.css';
import SearchPokemon from './SearchPokemon';


class Pokedex extends React.Component{
    render(){
        console.log(this.props)
        var that = this;
        function compare( a, b ) {
            if ( a.id < b.id ){
              return -1;
            }
            if ( a.id > b.id ){
              return 1;
            }
            return 0;
          }
        return (
            <div>
                <div className="row">
                    <div className="searchView container-fluid">
                       <SearchPokemon pokemonToDisplay={this.props.pokemonToDisplay} loadDataGen={this.props.loadDataGen} pokemonArray={this.props.pokemonArray} handlerCache={this.props.handlerCache} cache={this.props.cache} originalListe={this.props.originalListe} handlerPokemon={this.props.handlerPokemon}/>
                    </div>
                </div>
                <div className="row">
                    <div className="pokemonView col-12">
                            <ul className="itemList">
                                {that.props.pokemonArray.sort( compare ).map(function(item, i){
                                    const graphImage = require('./pokemon/' + item.id + '.png');
                                    return(
                                        <li className="item itemPokemon" key={i} onClick={() => {that.props.handlerDetails(item); that.props.handlerView('pokemonDetails') }}>
                                            <img src={graphImage} alt="pokemonImage" className="item-img"/>
                                            <p className="name">#{item.id} {item.name}</p>
                                            {(() => {
                                                if(!item.types[1]){
                                                    return(
                                                    <div className="">
                                                            <p className={item.types[0].type.name +" type"}>{item.types[0].type.name}</p> 
                                                    </div>
                                                    ) 
                                                }else{
                                                    return(
                                                        <div className="">
                                                                <p className={item.types[0].type.name +"type"}>{item.types[0].type.name}</p>
                                                                <p className={item.types[1].type.name +"type type2"}>{item.types[1].type.name}</p>
                                                        </div>
                                                    )
                                                }
                                            })()}
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
