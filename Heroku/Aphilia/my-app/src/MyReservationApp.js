import React from 'react';
import './App.css';
import './bootstrap.min.css';
import DatePicker from "react-datepicker";
import Schedule from "./Schedule.js";
import BookingForm from "./BookingForm.js";
import BookingConfirmation from "./BookingConfirmation.js";
import "react-datepicker/dist/react-datepicker.css";


class MyReservationApp extends React.Component{
    constructor(props){
        super(props)
		this.state = {
            tabletSet:"1",
            startDate: new Date()
        }
    }
    handleTableset = (changeEvent) =>{
        this.setState({
            tabletSet: changeEvent
        });
    }
    handleDate = date => {
        this.setState({
            startDate: date,
            date:date
        });
        this.handleTime(date)
    }
    handleTime = time =>{
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

    handleCivility = (changeEvent) =>{
        this.setState({
          civility: changeEvent.target.value
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
    handlePhone = (changeEvent) =>{
        this.setState({
          phone: changeEvent.target.value
        });
    }
    
    handleSubmit = (formSubmitEvent) => {
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
        var GivenDate = obj.date;
        var CurrentDate = new Date();
        GivenDate = new Date(GivenDate);
        
        newArrayInfo.push(obj)
        if(GivenDate < CurrentDate){
            alert('Given date is not greater than the current date.');
            return false;
        }else{
            this.setState({
                reservation: "ok",
                globalInformation:newArrayInfo
              });
        }
      }
    render(){
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
                                    <select onChange={(e) => {this.handleTableset(e.target.value)}}>
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
                                    </select>
                                </div>
                                <div className="reservation_date_picker col-6">
                                    <label>Start date:</label>
                                    <div>
                                        <DatePicker selected={this.state.startDate} onChange={this.handleDate} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="reservation_hour_picker">
                                        <label>Choose an hour:</label>
                                        <div>
                                            <Schedule date={this.state.startDate} handleTime={this.handleTime} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div>
                    <BookingForm userName={this.state.name} userFirstname={this.state.firstname} userPhone={this.state.phone} handleSubmit={this.handleSubmit} handlePhone={this.handlePhone} handleFirstname={this.handleFirstname} handleName={this.handleName} handleCivility={this.handleCivility} reservationTime={this.state.reservationTime} startDate={this.state.startDate} globalReservation={this.state.globalReservation} selectedOption={this.state.selectedOption}/>
                </div>
                <div>
                   <BookingConfirmation reservation={this.state.reservation} startDate={this.state.startDate} globalInformation={this.state.globalInformation}/> 
                </div>
            </div>
        )
    }

}

export default MyReservationApp;