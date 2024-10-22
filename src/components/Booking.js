import React from "react";
import AccountForm from "./AccountForm";

const Booking = (props) => {
    return (
        <AccountForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}></AccountForm>
    )
}

export default Booking;