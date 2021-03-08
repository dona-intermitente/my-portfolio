import Mapa from 'components/mapa.js'
import menus from 'data/menuData';

function Home () {
  return (
    <div className="grid menu text-encabezado">
      {menus.map(s => (
        <Mapa data={s.menu} img={s.image} />
      )
      )}
    </div>
  )
}

export default Home;