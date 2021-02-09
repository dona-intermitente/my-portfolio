import React, {Component} from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

class Slider extends Component {
    render() {
        return (
            <Carousel
                arrowLeft={<i class="fas fa-arrow-left" name="arrow-left" ></i>}
                arrowLeftDisabled={<i class="fas fa-arrow-left disable" name="arrow-left" ></i>}
                arrowRight={<i class="fas fa-arrow-right" name="arrow-right"></i>}
                arrowRightDisabled={<i class="fas fa-arrow-right disable" name="arrow-right"></i>}
                addArrowClickHandler
                offset={40}
                slidesPerPage={3}
                breakpoints={{
                800: {
                    offset: 30,
                    slidesPerPage: 2,
                },
                400: {
                    centered: true,
                    offset: 20,
                    slidesPerPage: 1,
                },
                }}
            >
              {this.props.data.map(s => (
                <div className="item">
                    <img src={s.img} alt={s.text2}/>
                    <h1 className="text-cuerpo">
                        {s.text1}
                    </h1>
                    <h1 className="text-cuerpo">
                        {s.text2}
                    </h1>
                </div>
                )
              )}
            </Carousel>
        )
    }
}

export default Slider;