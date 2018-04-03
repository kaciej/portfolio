import React, { Component } from 'react';
import WOW from 'wowjs';
import FontAwesome from "react-fontawesome";

class Header extends Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (

            <div className="row header">
                <div className="col-md-2 col-md-offset-2 col-sm-12 col-sm-offset-0">
                    <h1 className="white hello">hello,</h1>
                </div>
                
                <div className="white col-md-1 col-md-offset-0">
                    <div className="im">i'm</div>
                </div>

                <div className="col-md-3 col-sm-12 col-sm-offset-0">
                    <h1 className="white name-header wow fadeInRight" data-wow-offset="90"  data-wow-iteration="1">kacie jacobson</h1>
                    <h4 className="white my-desc wow fadeInLeft" data-wow-offset="90" data-wow-iteration="1">qa engineer, wonderer</h4>
                </div>
                <div className="col-md-2 col-md-offset-0 col-sm-12 col-sm-offset-0">
                <a className="white connect-header skew" href="#connect">
                    <h4 className="white connect-header">lets chat </h4>
                    <FontAwesome className="angle-right" name="angle-right" size="2x"/>
                </a>   
                </div>

            </div>
        );
    }
}

export default Header;