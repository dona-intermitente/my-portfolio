import Title from 'components/title';
import Data from 'data/title';

import Form, { Page } from 'components/formCarousel'
import Select from "components/select";

import backData from "data/backgroundData.json";
import Background from "components/background";
import React, {Component} from 'react'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { nombre: "", email: "", project: "" };
  }
  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("envio con éxito"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { nombre, email, project } = this.state;
    return (
      <div className="grid">
        <Background position={backData.Contact}/>
        <div className="col-4">
          <Title data={Data.contact}/>
        </div>
        <div className="col-4 text-title-light">
          <Form onSubmit={this.handleSubmit}>
            <Page>
              <h1>Yo soy Sindi, ¿cómo te llamas?</h1>
              <input name="nombre" type="text" value={nombre} onChange={this.handleChange}/>
            </Page>
            <Page>
              <h1>¿Que tipo de proyecto quieres hacer?</h1>
              <imput type="button" name="project" value={project} onChange={this.handleChange}>
                <Select/>
              </imput>
            </Page>
            <Page>
              <h1>Dejame tu e-mail, yo te contactaré</h1>
              <input name="email" type="email" value={email} onChange={this.handleChange}/>
            </Page>
          </Form>
        </div> 
      </div>
    );
  }
}

export default Contact;