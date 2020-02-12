import React from 'react';
import './App.css';
import './bootstrap.min.css';
import BookingConfirmation from "./BookingConfirmation.js";
import BookingPicker from "./BookingPicker.js";
import BookingForm from "./BookingForm.js";
import "react-datepicker/dist/react-datepicker.css";

class MyReservationApp extends React.Component{
    constructor(props){
        super(props)
		this.state = {
            tabletSet:"1",
            startDate: new Date()
        }
    }
    handlerChangeState = (context, value) => {
        switch(context){
            case "tableset" : 
                this.setState({
                    tabletSet: value
                });
            break;
            case "time" :
                const newArrayTime = [];
                const obj = {
                    table:this.state.tabletSet,
                    date:this.state.startDate,
                    time:value
                }
                newArrayTime.push(obj);
                this.setState({
                    reservationTime: value,
                    globalReservation:newArrayTime 
                });
            break;
            case "civility":
                this.setState({
                    civility: value
                  });
            break;
            case "firstname":
                this.setState({
                    firstname: value
                  });
            break;
            case "name":
                this.setState({
                    name: value
                  });
            break;
            case "phone":
                this.setState({
                    phone: value
                  });
            break;
            case "submit":
                const newArrayInfo = [];
                const userInfo = {
                    table:this.state.tabletSet,
                    date:this.state.startDate.toString().substr(0, 15),
                    time:this.state.reservationTime,
                    civility:this.state.civility,
                    firstname:this.state.firstname,
                    name:this.state.name,
                    phone:this.state.phone
                }
                var GivenDate = userInfo.date;
                var CurrentDate = new Date();
                GivenDate = new Date(GivenDate);
                newArrayInfo.push(userInfo)
                if(GivenDate < CurrentDate){
                    alert('Given date is not greater than the current date.');
                    return false;
                }else{
                    if(this.state.phone !== undefined){
                        if(/\+[3]{2}/.test(this.state.phone.replace(/ /g, ""))){
                            if(this.state.phone.replace(/ /g, "").length === 12){
                                this.setState({
                                    reservation: "ok",
                                    globalInformation:newArrayInfo
                                });
                            }else{
                                alert('The phone number is not complete')
                            }
                        }else{
                            alert('Change the phone indicator to match French country')
                        }
                    }else{
                        alert('No phone number have been entered')
                    }
                }
            break;
            case "reset":
                this.setState({
                    reservation: "nok",
                    reservationTime:null,
                    table:null,
                    date:null,
                    time:null,
                    civility:null,
                    firstname:null,
                    name:null,
                    phone:null,
                    startDate:new Date()
                });
            break;
            default : 
                this.setState({
                    startDate: context,
                    date:context
                });
            break;
        }
    } 
    render(){
        return(<div className="Application" key={1}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <h1 className="mylogo">My reservationapp</h1>
                </nav>
                {(() => {switch(this.state.reservation !== "ok"){
                        case true : return ([<div className="content" key={2}>
                            <BookingPicker handlerChangeState={this.handlerChangeState} data={this.state}/>
                            <BookingForm handlerChangeState={this.handlerChangeState} data={this.state}/>
                        </div>
                        ])
                        case false : return <BookingConfirmation handlerChangeState={this.handlerChangeState} data={this.state}/>
                        default:return false;
                    }
                })()}
            </div>
        )
    }

}

export default MyReservationApp;