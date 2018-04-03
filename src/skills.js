import React, { Component } from 'react';
import WOW from "wowjs";

class Skills extends Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div className="skill-space" id="skills">
                <hr/>  
                <div className="row">
                    <div className="col-md-4 col-md-offset-2 col-sm-12 col-sm-offset-0">
                        <h1 className="skills-title">skills</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 col-md-offset-1 col-sm-12 col-sm-offset-0">
                        <ul className="skills wow fadeInRight" data-wow-offset="70"  data-wow-iteration="1" >
                            <li>Javascript</li>
                            <li>React/Redux</li>
                            <li>HTML/CSS</li>
                            <li>jQuery</li>
                            <li>Bootstrap</li>
                            <li>Agile Methodology</li>
                        </ul>
                    </div>

                    <div className="col-md-3  col-sm-12 col-sm-offset-0">
                        <ul className="skills wow fadeInRight" data-wow-offset="70" data-wow-delay=".5s" data-wow-iteration="1" >
                            <li>NodeJS</li>
                            <li>Express</li>
                            <li>Mongoose</li>
                            <li>JSON</li>
                            <li>MongoDB</li>
                            <li>Angular</li>
                            <li>C#</li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-12 col-sm-offset-0">
                        <ul className="skills wow fadeInRight" data-wow-offset="70" data-wow-delay="1s" data-wow-iteration="1" >
                            <li>Git</li>
                            <li>Mocha/Chai</li>
                            <li>JSON</li>
                            <li>Test Complete</li>
                            <li>Automated API Testing</li>
                            <li>Postman</li>
                            <li>VS/ VS Code</li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

export default Skills;