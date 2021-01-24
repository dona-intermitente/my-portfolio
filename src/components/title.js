import React, {Component} from 'react'

class Title extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.data.map(s => (
                    <div className="titles">
                        <h1 className="text-display-bold">
                            {s.title}
                        </h1>
                        <h2 className="text-subencabezado-light">
                            {s.subtitle}
                        </h2>
                    </div>
                )
                )}
            </React.Fragment>
        )
    }
}

export default Title;