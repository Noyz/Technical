import React from 'react';
import './App.css';
import './bootstrap.min.css';




class PokemonDetails extends React.Component{
    componentWillMount(){
        console.log(this.props.thisPokemon)
    }
    render(){
        return (
            <div>
                <div>Details on {this.props.thisPokemon.name}</div>
                <img alt="pokemon_sprite" src={this.props.thisPokemon.sprites["front_default"]}/>
                <div>
                    {(() => {
                        switch(this.props.thisPokemon.abilities.length){
                            case 1 :
                                return(
                                        <div className="">
                                                <p className={this.props.thisPokemon.abilities[0].ability.name +" ability"}>{this.props.thisPokemon.abilities[0].ability.name}</p> 
                                        </div>
                                        ) 
                            case 2 : 
                                return(
                                            <div className="">
                                                    <p className={this.props.thisPokemon.abilities[0].ability.name +" ability"}>{this.props.thisPokemon.abilities[0].ability.name}</p>
                                                    <p className={this.props.thisPokemon.abilities[1].ability.name +" ability ability2"}>{this.props.thisPokemon.abilities[1].ability.name}</p>
                                            </div>
                                        )
                            case 3 : 
                                return(
                                            <div className="">
                                                    <p className={this.props.thisPokemon.abilities[0].ability.name +" ability"}>{this.props.thisPokemon.abilities[0].ability.name}</p>
                                                    <p className={this.props.thisPokemon.abilities[1].ability.name +" ability ability2"}>{this.props.thisPokemon.abilities[1].ability.name}</p>
                                                    <p className={this.props.thisPokemon.abilities[2].ability.name +" ability ability3"}>{this.props.thisPokemon.abilities[2].ability.name}</p>
                                            </div>
                                        )
                            default:break;
                        }
                       
                    })()}
                </div>
                <div>
                    {(() => {
                        if(!this.props.thisPokemon.types[1]){
                            return(
                            <div className="">
                                    <p className={this.props.thisPokemon.types[0].type.name +" type"}>{this.props.thisPokemon.types[0].type.name}</p> 
                            </div>
                            ) 
                        }else{
                            return(
                                <div className="">
                                        <p className={this.props.thisPokemon.types[0].type.name +" type"}>{this.props.thisPokemon.types[0].type.name}</p>
                                        <p className={this.props.thisPokemon.types[1].type.name +" type type2"}>{this.props.thisPokemon.types[1].type.name}</p>
                                </div>
                            )
                        }
                    })()}
                </div>
                <div className="container">
                    {(() => {
                        return(
                            <div className="stats">
                                <label>Hp</label>
                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" style={{width:this.props.thisPokemon.stats[5].base_stat}} aria-valuenow={this.props.thisPokemon.stats[5].base_stat} aria-valuemin="0" aria-valuemax="100">{this.props.thisPokemon.stats[5].base_stat}</div>
                                </div>
                                <br/>
                                <label>Attack</label>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width:this.props.thisPokemon.stats[4].base_stat}} aria-valuenow={this.props.thisPokemon.stats[4].base_stat} aria-valuemin="0" aria-valuemax="100">{this.props.thisPokemon.stats[4].base_stat}</div>
                                </div>
                                <br/>
                                <label>Defense</label>
                                <div className="progress">
                                    <div className="progress-bar bg-info" role="progressbar" style={{width:this.props.thisPokemon.stats[3].base_stat}} aria-valuenow={this.props.thisPokemon.stats[3].base_stat} aria-valuemin="0" aria-valuemax="100">{this.props.thisPokemon.stats[3].base_stat}</div>
                                </div>
                                <br/>
                                <label>Special Attack</label>
                                <div className="progress">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{width:this.props.thisPokemon.stats[2].base_stat}} aria-valuenow={this.props.thisPokemon.stats[2].base_stat} aria-valuemin="0" aria-valuemax="100">{this.props.thisPokemon.stats[2].base_stat}</div>
                                </div>
                                <br/>
                                <label>Special Defense</label>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width:this.props.thisPokemon.stats[1].base_stat}} aria-valuenow={this.props.thisPokemon.stats[1].base_stat} aria-valuemin="0" aria-valuemax="100">{this.props.thisPokemon.stats[1].base_stat}</div>
                                </div>
                                <br/>
                                <label>Speed</label>
                                <div className="progress">
                                    <div className="progress-bar bg-secondary" role="progressbar" style={{width:this.props.thisPokemon.stats[0].base_stat}} aria-valuenow={this.props.thisPokemon.stats[0].base_stat} aria-valuemin="0" aria-valuemax="100">{this.props.thisPokemon.stats[0].base_stat}</div>
                                </div>
                            </div>
                        )
                    })()}
                </div>
            </div>
        );
    }
  
}

export default PokemonDetails;
