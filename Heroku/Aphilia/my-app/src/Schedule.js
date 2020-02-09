import React from 'react';
import './App.css';
import './bootstrap.min.css';

const arrayTimeDay = ["12:00", "12:15", "12:30","12:45", "13:00", "13:15", "13:30", "13:45", "14:00"];
const arrayTimeNight = ["19:30", "19:45", "20:00","20:15", "20:30", "20:45", "21:15", "21:30", "21:45", "22:00"];




class Schedule extends React.Component{
    render(){
        var that = this;
        return(
            <div>
                <div>
                    {(() => {
                        switch (this.props.date.getDay() === 2 || this.props.date.getDay() === 6) {
                        case true: return  <div>
                                <p className="eating_time">Lunch time: </p>
                                <div className="schedule_item_container">{arrayTimeDay.map(function(item, i){
                                    return(<li className="item" key={i}>
                                            <p><button onClick={(e) => {e.preventDefault();that.props.handlerReservationTime(e.target.innerHTML)}}>{item}</button></p>
                                        </li>)
                                    })}
                                </div>
                                <p className="eating_time">Diner time: </p>
                                <div className="schedule_item_container">{arrayTimeNight.map(function(item, i){
                                    return(<li className="item" key={i}>
                                            <p><button onClick={(e) => {e.preventDefault();that.props.handlerReservationTime(e.target.innerHTML)}}>{item}</button></p>
                                        </li>)
                                    })}
                                </div>
                            </div>
                        default:return <p>No table available for this date</p>
                    }
                })()}
                </div>
            </div>
        )
    }

}

export default Schedule;