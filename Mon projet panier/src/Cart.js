import React from 'react';
import './App.css';
import './bootstrap.min.css';


class Cart extends React.Component{
	constructor(props){
		super(props);
		this.changeViewCart = this.changeViewCart.bind(this)
		this.productQuantityUp = this.productQuantityUp.bind(this)
		this.productQuantityDown = this.productQuantityDown.bind(this)
		this.productQuantityDelete = this.productQuantityDelete.bind(this)
		this.state = {
			viewCart : [this.changeViewCart(this.props.inCart)],
			inCart:[],
			revenue:[],
			ref:[]
		}
	}
	productQuantityUp (object){
		var x;
		for(x in this.props.inCart){
			if(object.ref === this.props.inCart[x].ref){
				if(this.props.inCart[x].quantity !== 9){
					var shadowCopy = this.props.inCart.slice()
					shadowCopy[x].quantity++
					this.setState({inCart:shadowCopy})
					this.props.handler(shadowCopy, this.props.reference)
				}
			}
		}
	}
	
	productQuantityDown (object){
		var x;
		for(x in this.props.inCart){
			if(object.ref === this.props.inCart[x].ref){
				if(this.props.inCart[x].quantity !== 1){
					var shadowCopy = this.props.inCart.slice()
					shadowCopy[x].quantity--
					this.setState({inCart:shadowCopy})
					this.props.handler(shadowCopy, this.props.reference)
				}
			}
		}
	}
	productQuantityDelete (object){
		var x;
		for(x in this.props.inCart){

			if(object.ref === this.props.inCart[x].ref){
				delete this.props.inCart[x]
				var filtered = this.props.inCart.filter(function (el) {
  					return el != null;
				});
				delete this.props.reference[x]
				var filteredRef = this.props.reference.filter(function (el) {
  					return el != null;
				});
				this.props.handler(filtered, filteredRef)
			}
		}
	}
	deleteAll(){
		this.props.handler([], [])
	}
	changeViewCart(obj){
		var thisFunction = this;
		if(obj.length !== 0){
			return(
					<div>
						<table className="table thead-dark table-responsive">
							<thead className="thead-dark">
								<tr>
									<th className="w-25 d-none d-md-table-cell">Image</th>
									<th>Produit</th>	
									<th>Reference</th>
									<th>Quantités</th>
									<th>Prix</th>
									<th></th>
								</tr>
							</thead>
							<tbody className="align-middle">
									{obj.map(function(object, i){
										return( 
											<tr key={i}>
												<td className="w-25 d-none d-md-table-cell">
													<img src={object.image} alt="" className="w-100"/>
												</td>
												<td className="w-50 align-middle">
												{object.title.name}
													<br/>
													<small className="text-secondary">{object.title.details}</small>
												</td>
												<td className="align-middle">
													<small>Ref: {object.ref} </small>
												</td>
												<td className="align-middle text-right">
													<div role="group" className="btn-group">
														<button type="button" className="btn btn-light" onClick={() => {thisFunction.productQuantityDown(object)}}>-</button>
														<button type="button" className="btn btn-disable">{object.quantity}</button>
														<button type="button" className="btn btn-light" onClick={() => {thisFunction.productQuantityUp(object)}}>+</button>
													</div>
												</td>
												<td className="align-middle">{object.price * object.quantity}&nbsp;€</td>
												<td className="align-middle">
													<button title="supprimer" type="button" className="btn btn-outline-dark" onClick={() => {thisFunction.productQuantityDelete(object)}}>X</button>
												</td>
											</tr>
										)
									})}
							</tbody>
						</table>
					</div>
			)
		}else{
			return(
				<div className="cartEmpty">
					<h2 className="display-5 text-center mt-1">Votre panier est vide</h2>
				</div>
			)
		}
	}
	render(){
		return (
			<div>
				<div className="py-3 px-2 pb-0 shadow border mb-3">
					{this.changeViewCart(this.props.inCart)}
				</div>
				<div className="d-flex bg-dark p-2 text-light mb-3">
					<div>
						<strong>Total: </strong>
					</div>
					<div className="ml-auto">
						<strong>{this.props.revenue} €</strong>
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
