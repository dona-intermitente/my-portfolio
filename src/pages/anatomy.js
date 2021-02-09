import Title from 'components/title';
import Data from 'data/title';

import Carousel from 'components/carousel';
import anatomyData from 'data/anatomyData';

function Anatomy() {
    return (
      <div className="grid">
        <div className="col-4">
          <Title data={Data.anatomy}/>
        </div>
        <div className="carousel col-4" >
          <Carousel data={anatomyData}/>
        </div>
      </div>
    );
  }
  
  export default Anatomy;