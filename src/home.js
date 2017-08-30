import React, { Component } from 'react';

import MyNavbar from "./navbar.js";
import Header from "./header.js";
import Skills from "./skills.js"
import FormContainer from "./form/form-container.js";
import Footer from "./footer.js";

class Home extends Component {
    render() {
        return (
            <div>
              <MyNavbar /> 
              <div className="container-fluid">
                <Header /> 
                <Skills />
                <FormContainer />
                <Footer />
              </div>
              
            </div>
        );
    }
}

export default Home;