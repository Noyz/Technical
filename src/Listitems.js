import React from 'react';
import './App.css';
import './bootstrap.min.css';


class Listitems extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			inCart : [],
			Listitems:[this.props],
			ref:[]
		}
	}
	addToCart (object){
		if(this.props.reference.length === 0){

				this.state.ref = []
				this.state.inCart = []
				this.state.ref.push(object.ref)
				this.state.inCart.push(object)
				this.setState({ref:this.state.ref})
				this.setState({inCart:this.state.inCart})
				/*const shadowRef = [object.ref]
				const shadowInCart = [object]

				const shadowState = Object.assign({}, this.state);

				shadowState.inCart = shadowInCart
				shadowState.ref = shadowRef
				this.setState(shadowState)
				this.props.handler(shadowInCart, shadowRef);*/

		}else{
			var x;
			if(this.props.reference.indexOf(object.ref) > -1){ 
				for(x in this.props.inCart){
					if(this.props.inCart[x].ref === object.ref){
						var shadowCopy = this.props.inCart.slice()
						shadowCopy[x].quantity++
						this.setState({inCart:shadowCopy})
					}
				}
			}else{
				this.state.ref.push(object.ref)
				this.state.inCart.push(object)
				this.setState({ref:this.state.ref})
				this.setState({inCart:this.state.inCart})
			}
		}

		this.props.handler(this.state.inCart, this.state.ref);
	}
	render(){
		var thisFunction = this
		return (
			<div>
				<div className="row mb-5">
					<ul>
		                {this.props.data.map(function(object, i ){
		                	return( 
			                	<li key={i} className="item">
			                		<div className="col">
										<img src={object.image} alt="Canapé-lit panoramique 7 places gris clair" className="w-100"/>
									</div>
									<div className="col">
										<strong id="description">{object.title.details}</strong>
										<div id="price" className="text-secondary font-weight-bold mb-2">{object.price}€</div>
				          				<button type="button" className="btn btn-secondary" onClick={() => {thisFunction.addToCart(object)}}>
				          					<small>Ajouter au panier</small>
				          				</button>
				          			</div>
						        </li>
						    )    
					    })}
					</ul>
          		</div>
			</div>
	  	);
	}	
}

export default Listitems;
