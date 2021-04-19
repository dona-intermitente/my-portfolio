import React, {Component } from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Popup from 'reactjs-popup';

class Slider extends Component {
    render() {
        return (
            <Carousel
                arrowLeft={<i className="fas fa-arrow-left" name="arrow-left" ></i>}
                arrowLeftDisabled={<i className="fas fa-arrow-left disable" name="arrow-left" ></i>}
                arrowRight={<i className="fas fa-arrow-right" name="arrow-right"></i>}
                arrowRightDisabled={<i className="fas fa-arrow-right disable" name="arrow-right"></i>}
                addArrowClickHandler
                
                slidesPerPage={3}
                breakpoints={{
                800: {
                    
                    slidesPerPage: 2,
                },
                400: {
                    centered: true,
                    
                    slidesPerPage: 1,
                },
                }}
            >
                {this.props.data.map(s => (
                    <div className="item">
                        <Popup trigger={
                            <button>
                                <img src={s.img} alt={s.text2}/>
                            </button>
                        } modal nested>
                            {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>
                                        &times;
                                    </button>
                                <div className="content">
                                {s.content.map(i => (
                                    <div className={i.class + " block"}>
                                        <div className="preloader"/>
                                        <img src={i.img2} alt={i.text1}/>
                                        <p className="text-subencabezado-light">
                                            {i.text3}
                                        </p>
                                    </div>
                                )
                                )}
                                </div>
                            </div>
                            )}
                        </Popup>

                        <h1 className="text-body">
                            {s.text1}
                        </h1>
                        <h1 className="text-body">
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