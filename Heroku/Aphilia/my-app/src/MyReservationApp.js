import React from 'react';
import './App.css';
import './bootstrap.min.css';
import DatePicker from "react-datepicker";
import Schedule from "./Schedule.js";
import "react-datepicker/dist/react-datepicker.css";


class MyReservationApp extends React.Component{
    constructor(props){
        super(props)
        this.handlerReservationTime = this.handlerReservationTime.bind(this)
        this.handlerTableSet = this.handlerTableSet.bind(this)
        this.handlerReservationDate = this.handlerReservationDate.bind(this)
        this.handleOptionChange = this.handleOptionChange.bind(this)
        this.handleCivility = this.handleCivility.bind(this)
        this.handleFirstname = this.handleFirstname.bind(this)
        this.handleName = this.handleName.bind(this)
		this.state = {
            tabletSet:"1",
            startDate: new Date(),
            globalReservation:[],
            selectedOption: 'Mr'
            
        }
    }
    handleChange = date => {
        this.setState({
            startDate: date
        });
    }
    handlerReservationTime = time =>{
        const newArrayTime = [];
        const obj = {
            table:this.state.tabletSet,
            date:this.state.startDate,
            time:time
        }
        newArrayTime.push(obj);
        this.setState({
            reservationTime: time,
            globalReservation:newArrayTime 
        });
    }
    handlerReservationDate = object =>{
        this.setState({
            reservationDate: object
        });
    }
    handlerTableSet = object =>{
        this.setState({
            tabletSet: object
        });
    }
    handleOptionChange = (changeEvent) =>{
        this.setState({
          selectedOption: changeEvent.target.value
        });
    }
    handleCivility = (changeEvent) =>{
        this.setState({
          civility: changeEvent.target.value
        });
    }
    handlePhone = (changeEvent) =>{
        this.setState({
          phone: changeEvent.target.value
        });
    }
    handleFirstname = (changeEvent) =>{
        this.setState({
          firstname: changeEvent.target.value
        });
    }
    handleName = (changeEvent) =>{
        this.setState({
          name: changeEvent.target.value
        });
    }
    handlerSubmit = (formSubmitEvent) => {
        const newArrayInfo = [];
        const obj = {
            table:this.state.tabletSet,
            date:this.state.startDate.toString().substr(0, 15),
            time:this.state.reservationTime,
            civility:this.state.selectedOption,
            firstname:this.state.firstname,
            name:this.state.name,
            phone:this.state.phone
        }
        newArrayInfo.push(obj)
        this.setState({
            reservation: "ok",
            globalInformation:newArrayInfo
          });
      }
    render(){
        console.log(this.state.globalInformation)
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <h1 className="mylogo">My reservationapp</h1>
                </nav>
                <div id="booking_picker" className="container">
                    <div className="col-12">
                            <div className="row">
                                <div className="table_set_picker col-6" >
                                    <label htmlFor="tablet_set">Tablet_set: </label>
                                    <select onChange={(e) => {this.handlerTableSet(e.target.value)}}>
                                        <option value="1">1 table_set</option>
                                        <option value="2">2 table_sets</option>
                                        <option value="3">3 table_sets</option>
                                        <option value="4">4 table_sets</option>
                                        <option value="5">5 table_sets</option>
                                        <option value="6">6 table_sets</option>
                                        <option value="7">7 table_sets</option>
                                        <option value="8">8 table_sets</option>
                                        <option value="9">9 table_sets</option>
                                        <option value="10">10 table_sets</option>
                                        <option value="11">11 table_sets</option>
                                        <option value="12">12 table_sets</option>
                                        <option value="More">More</option>
                                    </select>
                                </div>
                                <div className="reservation_date_picker col-6">
                                    <label>Start date:</label>
                                    <DatePicker selected={this.state.startDate} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                <div className="reservation_hour_picker ">
                                    <label>Choose an hour:</label>
                                        <Schedule date={this.state.startDate} handlerDefault={this.state.handlerDefault} handlerReservationTime={this.handlerReservationTime}/>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div>
                    <div className="col-12">
                        <div className="row">
                            {(() => {switch (typeof this.state.reservationTime === "string" && this.state.startDate.getDay() === 2 || this.state.startDate.getDay() === 6) {
                                        
                                        case true : return ([
                                            <div id="booking_information" key="1"  className="container">
                                                {this.state.globalReservation.map(function(item, i){
                                                    return(<div className="item" key={1}>You have chosen <span className="reservation_info">{item.table}</span> table sets for the <span className="reservation_info">{item.date.toString().substr(0, 15)}</span> at <span className="reservation_info">{item.time}</span></div>)
                                                    })}
                                                <div>Please enter your personnal information:</div>
                                                <form className="booking_form" onSubmit={(e) => {e.preventDefault();this.handlerSubmit()}}>
                                                    <div className="informations">
                                                        <div className="col-12">
                                                            <div id="civility">
                                                                <label htmlFor="civility">Civility:</label>

                                                                <label htmlFor="mr">Mr</label>
                                                                <input className="civility_radio" type="radio" value="Mr" checked={this.state.selectedOption === 'Mr'} onChange={this.handleOptionChange}/>

                                                                <label htmlFor="mrs">Mrs</label>
                                                                <input className="civility_radio" type="radio" value="Mrs" checked={this.state.selectedOption === 'Mrs'} onChange={this.handleOptionChange}/>
                                                            </div>
                                                        </div>
                                                            <div className="col-12">
                                                                <label htmlFor="firstname">Firstname:</label>
                                                                <input type="text" id="firstname" onChange={event => {this.handleFirstname(event)}}  required/>
                                                            </div>
                                                            <div className="col-12">
                                                                <label htmlFor="Name">Name:</label>
                                                                <input type="text" id="name" onChange={event => {this.handleName(event)}} required/>
                                                            </div>
                                                            <div className="col-12">
                                                                <label htmlFor="phone">Phone :</label>
                                                                <input type="number" id="phone" onChange={event => {this.handlePhone(event)}} required/>
                                                            </div>
                                                    </div>
                                                    <button type="submit">Submit</button>
                                                </form>
                                            </div>
                                        ]); 
                                        break;
                                        default: return <div></div> 
                                    }
                            })()}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="col-12">
                        <div className="row">
                            {(() => {switch (this.state.reservation === "ok") {
                                        case true : return ([
                                            <div id="booking_information" key="1"  className="container">
                                                <h2>Your reservation is confirmed ! </h2>
                                                {this.state.globalInformation.map(function(item, i){
                                                    return([<div key={i}>
                                                        <div className="item"  >Hello <span className="">{item.civility}</span> <span>{item.name}</span>
                                                        <br></br>
                                                        We have the pleasure to inform you that your reservation has been confirmed. Please find below the booking details:
                                                        <br></br>
                                                        <ul>
                                                            <li>Table set: {item.table}</li>
                                                            <li>Date: {item.date}</li>
                                                            <li>Hour: {item.time}</li>
                                                            <li>Contact: {item.phone}</li>
                                                        </ul>
                                                        <br></br>
                                                        Thanks for choosing our services !
                                                        </div>
                                                    </div>])
                                                })}
                                            </div>
                                        ]); 
                                        break;
                                        default: return <div></div> 
                                    }
                            })()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default MyReservationApp;