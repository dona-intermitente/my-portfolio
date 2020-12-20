import Mapa from 'components/mapa.js'
import Menu from "data/menu.json"
import Image from "images/logo.svg";

function Home () {
  return (
    <div className="grid text-encabezado">
      <Mapa text="Anatomia de una dona" data={Menu} routeImg="/anatomy/" img={Image} alt="dona"/>
    </div>
  )
}

export default Home;