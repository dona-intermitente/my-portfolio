import React from 'react'

import Background from "components/background";

import Header from './header'
import Footer from './footer'

function Layout(props){
    return (
        <React.Fragment>
            <Header/>
            <div className="container layout">
                <Background/>
                {props.children}
            </div>
            <Footer/>
        </React.Fragment>
       );
}

export default Layout;