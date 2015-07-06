
import React from 'react'

class Modules extends React.Component {

  render () {
    let props = this.props
    let mods = props.modules.modules
    return (
      <div>
        <h2>Modules</h2>
        <ul className='list-reset'>
          {mods.map(function(mod, i) {
            return (
              <li key={i}>
                {mod.name} {mod.description} {mod.version}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

}

export default Modules

