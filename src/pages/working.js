import Title from 'components/title';
import Data from 'data/title';

function Working() {
    return (
      <div className="grid">
        <div className="col-4">
          <Title data={Data.working}/>
        </div>
      </div>
    );
  }

export default Working;