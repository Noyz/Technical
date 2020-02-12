import React from 'react';
import DatePicker from "react-datepicker";

const arrayTimeDay = ["12:00", "12:15", "12:30","12:45", "13:00", "13:15", "13:30", "13:45", "14:00"];
const arrayTimeNight = ["19:30", "19:45", "20:00","20:15", "20:30", "20:45", "21:15", "21:30", "21:45", "22:00"];

class BookingPicker extends React.Component{
    render(){
        var that = this;
        return([
            <div>
                <div id="booking_picker" className="container" style={{position:"relative"}}>
                    <div className="col-12" >
                        <div className="row">
                            <div className="table_set_picker col-6" >
                                <label htmlFor="tablet_set">Tablet_set: </label>
                                <select className="styleInput" style={{width:"150px"}} onChange={(e) => {this.props.handlerChangeState("tableset", e.target.value)}}>
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
                            <div className="col-6" style={{display:"flex"}}>
                                <label htmlFor="tablet_set">Date:</label>
                                <div className="styleInput" style={{width:"100px", border:"none"}}>
                                    <DatePicker className="styleInput"
                                    selected={this.props.data.startDate} 
                                    onChange={this.props.handlerChangeState}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="reservation_hour_picker">
                                    <label>Choose an hour:</label>
                                        {(() => {
                                            switch (this.props.data.startDate.getDay() === 2 || this.props.data.startDate.getDay() === 6) {
                                            case true: return ([<div key={3}>
                                                        <p className="eating_time">Lunch time: </p>
                                                        <div className="schedule_item_container">
                                                            {arrayTimeDay.map(function(item, i){
                                                            return(<p className="item" key={i}><button onClick={(e) => {e.preventDefault();that.props.handlerChangeState("time", e.target.innerHTML)}}>{item}</button></p>)
                                                            })}
                                                        </div>
                                                        <p className="eating_time">Diner time: </p>
                                                        <div className="schedule_item_container">{arrayTimeNight.map(function(item, i){
                                                            return(<p className="item" key={i}><button onClick={(e) => {e.preventDefault();that.props.handlerChangeState("time", e.target.innerHTML)}}>{item}</button></p>)
                                                            })}
                                                        </div>
                                                    </div>
                                            ]) 
                                            default:return <p>No table available for this date</p>
                                            }
                                        })()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ])
    }
}

export default BookingPicker;