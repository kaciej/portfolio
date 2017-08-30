import React, { Component } from 'react';
import FontAwesome from "react-fontawesome";

class Footer extends Component {
    render() {
        return (
            <div className="row footer">
                <div className="col-md-12">
                    <div className="inner-footer text-center">
                        <a className="icons" href="https://github.com/kaciej">
                        <FontAwesome className="footer-icons github"
                            name="github"
                            size="2x"
                            style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}/> 
                        </a>

                        <a className="icons" href="https://www.linkedin.com/in/kacie-jacobson/">
                        <FontAwesome className="footer-icons linkenin"
                            name="linkedin-square"
                            size="2x"
                            style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}/> 
                        </a>

                        <a className="icons" target="_blank" href="kacieaken@gmail.com">
                        <FontAwesome className="footer-icons envelope"
                            name="envelope-o"
                            size="2x"
                            style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}/> 
                        </a>

                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;