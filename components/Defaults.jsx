
import React from 'react'

class Defaults extends React.Component {

  render () {
    let props = this.props
    let defaults = props.modules.defaults
    return (
      <div>
        <h3>Defaults</h3>
        <ul className='list-reset'>
          {defaults.map(function(def, i) {
            return (
              <li key={i}>
                {def.key} {def.value}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

}

export default Defaults
