import Title from 'components/title'
import Data from 'data/title' 

function Anatomy() {
    return (
      <div className="grid">
        <div className="col-4">
          <Title data={Data.anatomy}/>
        </div>
      </div>
    );
  }
  
  export default Anatomy;