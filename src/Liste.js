import React from 'react';
import './App.css';
import './bootstrap.min.css';


class List extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			view : []
		}
	}
	render(){
		return (
			<div>Vue Liste</div>
	  );
	}	
}

export default List;
