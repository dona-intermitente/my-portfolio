import React from 'react'

import Title from 'components/title';
import Data from 'data/title';

import Slider from 'components/carousel';
import projectsData from 'data/projectsData';

import backData from "data/backgroundData.json";
import Background from "components/background";

function Proyects() {
    return (
      <div className="grid">
        <Background position={backData.Project}/>
        <div className="col-4">
          <Title data={Data.projects}/>
        </div>
        <div className="carousel col-4 text-title-light" >
          <Slider data={projectsData}/>
        </div>
      </div>
    );
  }

export default Proyects;