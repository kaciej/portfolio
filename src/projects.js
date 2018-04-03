import React, { Component } from 'react';
import WOW from "wowjs";

class Projects extends Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
        <div className="projects-space" id="projects">

                <div className="row">
                    <div className="col-md-4 col-md-offset-2 col-sm-12 col-sm-offset-0">
                        <h1 className="projects-title">projects</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-sm-12">

                        <div className="imgs wow fadeIn" data-wow-offset="70" data-wow-delay=".25s" data-wow-iteration="1"
                            style={{backgroundImage: 'url("images/chello-farm.png")'}}>
                            <div className="overlay">
                                <div className="chello hover-text">
                                    <h3>Chello Farms</h3>
                                    <p>A website built for a local farm with the focus on design and UX.</p>
                                    <a target="_blank" href="https://github.com/kaciej/chello-farms"><button className="btn code-btn">code here</button></a> 
                                </div>
                            </div>
                        </div>

                        <div className="imgs wow fadeIn" data-wow-offset="70" data-wow-delay=".5s" data-wow-iteration="1"
                            style={{backgroundImage: 'url("images/clean-air.png")'}}>
                            <div className="overlay">
                                <div className="clean-air hover-text">
                                    <h3>Clean Air</h3>
                                    <p>Site built to educate about air quality, focused on user authenication and API's.</p>
                                    <a target="_blank" className="code-btn" href="https://github.com/Coo-coo-kachoo/Clean-Air-SLC"><button className="btn code-btn">code here</button></a> 
                                </div>
                            </div>
                        </div>

                        <div className="imgs wow fadeIn" data-wow-offset="70" data-wow-delay=".75s" data-wow-iteration="1"
                            style={{backgroundImage: 'url("images/unschooling.png")'}}>
                            <div className="overlay">
                                <div className="unschooling hover-text">
                                    <h3>Unschooling</h3>
                                    <p>A site where parents who homeschool can collaborate. Focused on backend with Express.</p>
                                    <a target="_blank" className="unschool-site" href="http://natureschoollife.com/#/">http://natureschoollife.com/#/</a>
                                    <a target="_blank" className="code-btn" href="https://github.com/kaciej/Unschooling"><button className="btn code-btn">code here</button></a> 
                                </div>
                            </div>
                        </div>

                        <div className="imgs wow fadeIn" data-wow-offset="70" data-wow-delay="1s" data-wow-iteration="1"
                            style={{backgroundImage: 'url("images/southern-flare.png")'}}>
                            <div className="overlay">
                                <div className="robin hover-text">
                                    <h3>Souther Flare Lash</h3>
                                    <p>This is my current project, building a site for a small buisness owner.</p>
                                    <a target="_blank" className="unschool-site" href="https://www.southernflarelash.com/#/">https://www.southernflarelash.com/#/</a>
                                    <a target="_blank" className="code-btn" href="https://github.com/ElloraDevelopment/southern-flare-lash2/branches"><button className="btn code-btn">code here</button></a> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}



export default Projects;