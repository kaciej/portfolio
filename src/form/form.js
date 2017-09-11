import React, { Component } from 'react';
import FontAwesome from "react-fontawesome";

class Form extends Component {
    render() {
        return (
            <div>
                <form action="https://formspree.io/kacieaken@gmail.com" method="POST">
                   
                    <div className="form-group">
                        <input type="text"
                            className="form-control input-lg"
                            name="Name"
                            autoComplete="off"
                            id="Name"
                            placeholder="Name"
                            required/>
                    </div>

                    <div>
                        <input type="text" 
                            className="form-control input-lg"
                            name="Email"
                            autoComplete="off"
                            id="Email"
                            placeholder="Email"
                            required/>
                    </div>

                    <div className="form-group message">
                        <textarea className="form-control input-lg"
                            rows="3"
                            name="Message"
                            placeholder="Message"
                            id="Message"
                            required/>
                    </div>

                    <a className="pull-right skew" href="https://github.com/kaciej">
                        <button className="connect-btn" type="submit">connect</button>
                        <FontAwesome className="angle-right" name="angle-right" size="2x"/>
                    </a>

                </form>
            </div>
        );
    }
}

export default Form;