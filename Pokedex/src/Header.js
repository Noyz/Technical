import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Pokedex from './Pokedex.js'
import Home from './Home.js'



class Header extends React.Component{
    rooting(e){
        switch(e.target.id) {
            case "pokedex":
              this.props.handlerView(<Pokedex pokemonArray={this.props.pokemonArray} handlerPokemon={this.props.handlerPokemon}/>) 
              break;
            case "teams":
              break;
            default:
                return this.props.handlerView(<Home />)
          }
    }
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
              <button id="home" className="btn-view" onClick={(e) => {this.rooting(e)}}>Home</button>
              <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <button id="pokedex" className="btn-view" onClick={(e) => {this.rooting(e)}}>Pokedex <span className="sr-only">(current)</span></button>
                  </li>
                  <li className="nav-item">
                    <button id="teams" className="btn-view"  onClick={(e) => {this.rooting(e)}}>Teams</button>
                  </li>
                  <li className="nav-item">
                    <button id="Games" className="btn-view"  onClick={(e) => {this.rooting(e)}}>Games</button>
                  </li>
                </ul>
                </div>
            </nav>
      );
    }
  
}

export default Header;
