import Title from 'components/title';
import Data from 'data/title';

import Form, { Page } from 'components/formCarousel'
import Select from "components/select";

import backData from "data/backgroundData.json";
import Background from "components/background";

function Contact() {
  return (
    <div className="grid">
      <Background position={backData.Contact}/>
      <div className="col-4">
        <Title data={Data.contact}/>
      </div>
      <div className="col-4 text-title-light">
        <Form>
          <Page>
            <h1>Yo soy Sindi, ¿cómo te llamas?</h1>
            <input type="text"/>
          </Page>
          <Page>
            <h1>¿Que tipo de proyecto quieres hacer?</h1>
            <Select/>
          </Page>
          <Page>
            <h1>Dejame tu e-mail, yo te contactaré</h1>
            <input type="email"/>
          </Page>
        </Form>
      </div> 
    </div>
  );
}

export default Contact;