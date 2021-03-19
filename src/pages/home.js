import React from 'react'

import Mapa from 'components/mapa.js'
import menus from 'data/menuData';

import backData from "data/backgroundData.json";
import Background from "components/background";

function Home () {
  return (
    <React.Fragment>
    <Background position={backData.Home}/>
    <div className="grid menu text-encabezado">
      {menus.map(s => (
        <Mapa data={s.menu} img={s.image} />
      )
      )}
    </div>
    </React.Fragment>
  )
}

export default Home;