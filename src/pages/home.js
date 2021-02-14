import Mapa from 'components/mapa.js'
import {Menu, Imagen} from 'data/menuData';

function Home () {
  return (
    <div className="grid menu text-encabezado">
      <Mapa data={Menu} imagen={Imagen} />
    </div>
  )
}

export default Home;