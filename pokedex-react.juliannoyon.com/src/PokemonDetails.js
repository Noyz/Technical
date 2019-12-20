import React from 'react';
import './App.css';
import './bootstrap.min.css';




class PokemonDetails extends React.Component{
    componentWillMount(){
        console.log(this.props.pokemon.name)
    }
    render(){
        return (
        <div>Details on {this.props.pokemon.name}</div>
      );
    }
  
}

export default PokemonDetails;
