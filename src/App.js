import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Listitems from './Listitems.js';
import Cart from './Cart.js';
import Products from './Products.json'


class App extends React.Component{
	constructor(props){
		super(props);
		this.handler = this.handler.bind(this)
		this.productQuantityUp = this.productQuantityUp.bind(this)
		this.productQuantityDown = this.productQuantityDown.bind(this)
		this.productQuantityDelete = this.productQuantityDelete.bind(this)
		this.changeViewCart = this.changeViewCart.bind(this)
		this.state = {
			productLists:[],
			inCart:[],
			ref:[],
			revenue:[],
			numberOfProducts:[],
			viewCart:this.changeViewCart([])
		}
	}
	productQuantityUp (object){
		var x;
		for(x in this.state.inCart){
			if(object.ref === this.state.inCart[x].ref){
				if(this.state.inCart[x].quantity !== 9){
					var shadowCopy = this.state.inCart.slice()
					shadowCopy[x].quantity++
					this.setState({inCart:shadowCopy})
					this.handler(shadowCopy, this.state.ref)
				}
			}
		}
	}
	productQuantityDown (object){
		var x;
		for(x in this.state.inCart){
			if(object.ref === this.state.inCart[x].ref){
				if(this.state.inCart[x].quantity !== 1){
					var shadowCopy = this.state.inCart.slice()
					shadowCopy[x].quantity--
					this.setState({inCart:shadowCopy})
					this.handler(shadowCopy, this.state.ref)
				}
			}
		}
	}
	productQuantityDelete (object){
		var x;
		for(x in this.state.inCart){

			if(object.ref === this.state.inCart[x].ref){
				delete this.state.inCart[x]
				var filtered = this.state.inCart.filter(function (el) {
  					return el != null;
				});
				delete this.state.ref[x]
				var filteredRef = this.state.ref.filter(function (el) {
  					return el != null;
				});
				this.handler(filtered, filteredRef)
			}
		}
	}
	handler(obj, ref) {
	    this.setState({
	      inCart: obj,
	      ref:ref,
	      viewCart:this.changeViewCart(obj)
	    });
	    console.log(obj, ref)
	    var x;
	    var revenue = [];
	    const reducer = (accumulator, currentValue) => accumulator + currentValue;  
	    for(x in obj){
	    	revenue.push(obj[x].price * obj[x].quantity)

	    }
	    if(revenue.length !== 0) {
	    	this.setState({revenue:revenue.reduce(reducer)})
	    } else {
	    	this.setState({revenue:0})
	    }
	}
	changeViewCart(obj){
		var thisFunction = this;
		if(obj.length !== 0){
			return(
				<div className="py-3 px-2 pb-0 shadow border mb-3 cartNotEmpty">
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
			<div className="App">
				<div className="container-fluid">
					<nav className="navbar navbar-light bg-light shadow w-100">
					  	<a className="navbar-brand" href="www.google.fr" >Cart</a>
					  	<div onClick={() => {console.log(this.state)}}>Panier <p className="itemInCart">{this.state.inCart.length}</p></div>
					</nav>
					<div id="mdm-cart" className="container">
						<h1 className="title border-bottom mb-5 display-1">Mon panier</h1>
						<div className="content">
							<div className="basket col-8">
								<Cart  viewCart={this.state.viewCart} handler={this.handler} inCart={this.state.inCart} revenue={this.state.revenue}/>
							</div>
							<div className="liste col-4">
								<h2>Produits en relation :</h2>
								<Listitems key={Products.id} data={Products} handler={this.handler} reference={this.state.ref} inCart={this.state.inCart}/>
							</div>
						</div>
					</div>
				</div>
			</div>
	  );
	}	
}

export default App;
