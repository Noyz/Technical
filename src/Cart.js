import React from 'react';
import './App.css';
import './bootstrap.min.css';


class Cart extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			viewCart : [this.props.viewCart],
			inCart:[],
			revenue:[],
			ref:[]
		}
	}
	deleteAll(){
		this.props.handler([], [])
	}
	render(){
		return (
			<div>
				<div className="py-3 px-2 pb-0 shadow border mb-3">
					{this.props.viewCart}
				</div>
				<div className="d-flex bg-dark p-2 text-light mb-3">
					<div>
						<strong>Total: </strong>
					</div>
					<div className="ml-auto">
						<strong>{this.props.revenue}€</strong>
					</div>
				</div>
				<div className="d-flex mb-5">
					<button type="button" className="btn ml-auto mr-3 text-dark btn-outline-warning" onClick={() => {this.deleteAll()}}>Tout supprimer</button>
            		<button type="button" className="btn btn-primary">Valider le panier</button>
            	</div>
			</div>
	  	);
	}	
}

export default Cart;
