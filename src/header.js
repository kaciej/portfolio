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
                <div className="col-md-12 col-md-offset-2 col-sm-12 col-sm-offset-0">
                    <h1 className="white hello">hello,</h1>
                </div>
                
                <div className="white im col-md-1 col-md-offset-3">i'm</div>

                <div className="col-md-4 col-sm-12 col-sm-offset-0">
                    <h1 className="white name-header wow fadeInRight" data-wow-offset="70"  data-wow-iteration="1">kacie jacobson</h1>
                    <h4 className="white my-desc wow fadeInLeft" data-wow-offset="70" data-wow-iteration="1">developer, wonderer</h4>
                </div>
                <div className="col-md-2 col-md-offset-1 col-sm-12 col-sm-offset-0">
                <a className="white connect-header" href="#connect">
                    <h4 className="white connect-header">lets chat </h4>
                    <FontAwesome className="angle-right" name="angle-right" size="2x"/>
                </a>   
                </div>

            </div>
        );
    }
}

export default Header;