import React, { Component } from 'react';
import Form from "./form.js";
import WOW from "wowjs";

class FormContainer extends Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div className="wow fadeIn" data-wow-offset="70" data-wow-iteration="1">
                <hr/>
                <div className="row connect-form" id="connect">
                    <div className="col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0">
                        <h1 className="text-center">lets chat</h1>
                        <Form />
                    </div>
                </div> 
            </div>
        );
    }
}

export default FormContainer;