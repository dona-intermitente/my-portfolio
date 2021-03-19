import React from 'react'

import Header from './header'
import Footer from './footer'

function Layout(props){
    return (
        <React.Fragment>
            <Header/>
            <div className="container layout">
                {props.children}
            </div>
            <Footer/>
        </React.Fragment>
       );
}

export default Layout;