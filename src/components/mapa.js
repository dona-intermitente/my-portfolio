import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Mapa extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.data.map(s => (
                    <div className={s.alias + " col-2"}>
                        <Link to={s.url}>
                            {s.name}
                        </Link>
                        <div className="line"></div>
                    </div>
                )
                )}
                {this.props.imagen.map(i => (
                    <a href={i.routeImg} className="image" title={i.text}>
                        <img src={i.img} alt={i.alt} />
                    </a>
                )
                )}
            </React.Fragment>
        )
    }
}

export default Mapa;