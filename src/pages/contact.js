import Title from 'components/title';
import Data from 'data/title';

function Contact() {
  return (
    <div className="grid">
        <div className="col-4">
          <Title data={Data.contact}/>
        </div>
    </div>
  );
}

export default Contact;