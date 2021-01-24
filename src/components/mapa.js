import React, {Component} from 'react'
import {Link} from "react-router-dom"

class Mapa extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.data.map(s => (
                    <div className="col-2">
                        <div className={s.alias}>
                            <Link to={s.url}>
                                {s.name}
                            </Link>
                        <div className="line"></div>
                        </div>
                    </div> 
                )
                )}
                <div title={this.props.text} className="image">
                    <a href={this.props.routeImg}>
                        <img src={this.props.img} alt={this.props.alt} />
                    </a>
                </div>
            </React.Fragment>
        )
    }
}

export default Mapa;