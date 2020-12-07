import Home from 'pages/home'
import Projects from 'pages/projects'
import Working from 'pages/working'
import Anatomy from 'pages/anatomy'
import Contact from 'pages/contact'

import Layout from './base/layout'
import {BrowserRouter,Switch,Route,} from "react-router-dom"

function Base() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/projects/" component={Projects}/>
          <Route exact path="/working/" component={Working}/>
          <Route exact path="/anatomy/" component={Anatomy}/>
          <Route exact path="/contact/" component={Contact}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default Base;