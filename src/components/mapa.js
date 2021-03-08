import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Mapa extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.data.map(s => (
                    <div className={s.class + " col-2"}>
                        <Link to={s.url}>
                            {s.name}
                        </Link>
                        <div className="line"></div>
                    </div>
                )
                )}
                <a href={this.props.img.routeImg} className="image" title={this.props.img.text}>
                    <img src={this.props.img.src} alt={this.props.img.alt} />
                </a>
            </React.Fragment>
        )
    }
}

export default Mapa;