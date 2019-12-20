import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import Listitems from './Listitems.js';
import Cart from './Cart.js';
import Products from './Products.json'


class App extends Component{
	constructor(props){
		super(props);
		this.handler = this.handler.bind(this)
		this.state = {
			inCart:[],
			ref:[],
			revenue:0
		}
	}
	
	handler(obj, ref) {
	    this.setState({
	      inCart: obj,
	      ref:ref
	    });
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
	render(){
		var x;
		var cartLength = 0;
		for(x in this.state.inCart){
			cartLength += this.state.inCart[x].quantity
		}
		return (
			<div className="App " >
				<div className="container-fluid">
					<nav className="navbar navbar-light bg-light shadow w-100">
					  	<a className="navbar-brand" href="www.google.fr" >Mon projet panier</a>
						<div>Panier <span data-v-d39b0b74="" className="badge badge-success">{cartLength}</span></div>
					</nav>
					<div id="mdm-cart" className="container">
						<h1 className="title border-bottom mb-5 display-1">Mon panier</h1>
						<div className="content">
							<div className="row">
								<div className="basket col-md-8">
									<Cart  viewCart={this.state.viewCart} handler={this.handler} reference={this.state.ref} inCart={this.state.inCart} revenue={this.state.revenue}/>
								</div>
								<div className="liste col-md-4">
									<h2>Produits en relation :</h2>
									<Listitems key={Products.id} data={Products} handler={this.handler} reference={this.state.ref} inCart={this.state.inCart}/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	  );
	}	
}

export default App;
