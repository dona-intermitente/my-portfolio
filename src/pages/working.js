import Title from 'components/title';
import Data from 'data/title';

import Slider from 'components/carousel';
import projectsData from 'data/projectsData';

import backData from "data/backgroundData.json";
import Background from "components/background";

function Working() {
    return (
      <div className="grid">
        <Background position={backData.Working}/>
        <div className="col-4">
          <Title data={Data.working}/>
        </div>
        <div className="carousel col-4" >
          <Slider data={projectsData}/>
        </div>
      </div>
    );
  }

export default Working;