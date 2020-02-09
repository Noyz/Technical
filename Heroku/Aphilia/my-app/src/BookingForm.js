import React from 'react';


class BookingForm extends React.Component{
    render(){
        return(
            <div className="col-12">
                <div className="row">
                    {(() => {if (typeof this.props.reservationTime === "string" && (this.props.startDate.getDay() === 2 || this.props.startDate.getDay() === 6)) {
                                return ([
                                    <div id="booking_information" key="1"  className="container">
                                        {this.props.globalReservation.map(function(item, i){
                                            return(<div className="item" key={1}>You have chosen <span className="reservation_info">{item.table}</span> table sets for the <span className="reservation_info">{item.date.toString().substr(0, 15)}</span> at <span className="reservation_info">{item.time}</span></div>)
                                            })}
                                        <div style={{marginBottom:"20px"}}>Please enter your personnal information:</div>
                                        <form className="booking_form" onSubmit={(e) => {e.preventDefault();this.props.handleSubmit()}}>
                                            <div className="informations">
                                                <div className="col-12">
                                                    <div id="civility">
                                                        <label htmlFor="civility">Civility:</label>
                                                        <div style={{marginRight:"2px"}}>
                                                            <label htmlFor="mr">Mr</label>
                                                            <input className="civility_radio" required name="civility" type="radio" value="Mr"  onChange={this.handleOptionChange}/>
                                                        </div>
                                                        

                                                        <div>
                                                            <label htmlFor="mrs">Mrs</label>
                                                            <input className="civility_radio" name="civility" type="radio" value="Mrs"  onChange={this.handleOptionChange}/>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                    <div className="col-12">
                                                        <label htmlFor="firstname">Firstname:</label>
                                                        <input type="text" id="firstname" onChange={event => {this.props.handleFirstname(event)}}  required/>
                                                    </div>
                                                    <div className="col-12">
                                                        <label htmlFor="Name">Name:</label>
                                                        <input type="text" id="name" value={this.props.name} onChange={event => {this.props.handleName(event)}} required/>
                                                    </div>
                                                    <div className="col-12">
                                                        <label htmlFor="phone">Phone :</label>
                                                        <input type="number" id="phone" onChange={event => {this.props.handlePhone(event)}} required/>
                                                    </div>
                                            </div>
                                            <button type="submit">Submit</button>
                                        </form>
                                    </div>
                                ]);    
                            }else{
                                return <div></div>;
                            }
                    })()}
                </div>
            </div>
        )
    }
}

export default BookingForm;