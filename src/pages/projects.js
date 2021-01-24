import Title from 'components/title';
import Data from 'data/title';

function Proyects() {
    return (
      <div className="grid">
        <div className="col-4">
          <Title data={Data.projects}/>
        </div>
      </div>
    );
  }

export default Proyects;