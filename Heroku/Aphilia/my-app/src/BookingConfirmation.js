import React from 'react';


class BookingConfirmation extends React.Component{
    render(){
        return(
            <div className="col-12">
                <div className="row">
                    {(() => {switch (this.props.reservation === "ok" && (this.props.startDate.getDay() === 2 || this.props.startDate.getDay() === 6)) {
                                case true : return ([
                                    <div id="booking_summary" key="1"  className="container">
                                        <h2>Your reservation is confirmed ! </h2>
                                        {this.props.globalInformation.map(function(item, i){
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
                                default: return <div></div> 
                            }
                    })()}
                </div>
            </div>
        )
    }
}

export default BookingConfirmation;