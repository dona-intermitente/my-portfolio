import React, {Component} from 'react'

class Background extends Component {
  render() {
    return (
      <React.Fragment>
      {this.props.position.map(s => (
      <div className="background">
        <svg className="zic" style={s.zic}>
            <path d="M0 20 L20 1 L40 20 L60 1 L80 20 L100 1 L120 20 L140 1 L160 20"/>
            <path d="M0 50 L20 30 L40 50 L60 30 L80 50 L100 30 L120 50 L140 30 L160 50"/>
        </svg>
        <svg className="onda" style={s.onda}>
            <path d="M0 30 q20 -40 40 0 q20 -40 40 0 q20 -40 40 0 q20 -40 40 0"/>
        </svg>
        <svg className="circles" style={s.circles}>
            <circle cx="20" cy="15" r="10"/>
            <circle cx="45" cy="35" r="10"/>
            <circle cx="15" cy="45" r="10"/>
        </svg>
      </div>
      )
      )}
      </React.Fragment>
    )
  }
}
  
export default Background;