import React from 'react'

import Title from 'components/title';
import Data from 'data/title';

import Slider from 'components/carousel';
import projectsData from 'data/projectsData';

function Proyects() {
    return (
      <div className="grid">
        <div className="col-4">
          <Title data={Data.projects}/>
        </div>
        <div className="carousel col-4" >
          <Slider data={projectsData}/>
        </div>
      </div>
    );
  }

export default Proyects;