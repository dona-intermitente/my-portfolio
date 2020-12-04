import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/styles.css';

import Header from 'components/header.js';
import Home from 'pages/home.js';
import Footer from 'components/footer';

function Content() {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}
export default Content;

ReactDOM.render(
  <React.StrictMode>  
    <Content/>
  </React.StrictMode>,
  document.getElementById('root')
);