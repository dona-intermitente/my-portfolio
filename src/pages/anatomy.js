import Title from 'components/title'
import Data from 'data/title'

import Mapa from 'components/mapa'
import mapas from 'data/anatomyData'

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import backData from "data/backgroundData.json";
import Background from "components/background";

function Anatomy() {
    return (
      <div className="grid">
        <Background position={backData.Anatomy}/>
        <div className="col-4">
          <Title data={Data.anatomy}/>
        </div>
        <div className="anatomy col-4 text-title-light">
          <Carousel
          arrowLeft={<i class="fas fa-arrow-left" name="arrow-left" ></i>}
          arrowLeftDisabled={<i class="fas fa-arrow-left disable" name="arrow-left" ></i>}
          arrowRight={<i class="fas fa-arrow-right" name="arrow-right"></i>}
          arrowRightDisabled={<i class="fas fa-arrow-right disable" name="arrow-right"></i>}
          addArrowClickHandler
          infinite={true}
          offset={0}
          slidesPerPage={3}
          breakpoints={{
          800: {
              slidesPerPage: 2,
          },
          400: {
              slidesPerPage: 1,
          },
          }}
          >
            {mapas.map(s=> 
              <Mapa data={s.menu} img={s.image}/>
            )
            }
          </Carousel>
        </div>
      </div>
    );
  }
  
  export default Anatomy;