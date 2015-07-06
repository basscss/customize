
import React from 'react'
import { findIndex } from 'lodash'

class Modules extends React.Component {

  render () {
    let props = this.props
    let mods = props.modules.modules
    let active = props.activeModules
    return (
      <div>
        <h2>Modules</h2>
        <ul className='list-reset border-top'>
          {mods.map(function(mod, i) {
            let checked = active.indexOf(i) > -1
            return (
              <li key={i} className='border-bottom'>
                <label className='py1 flex flex-center'>
                  <div className='mr1'>
                    <input type='checkbox'
                      name={mod.name}
                      checked={checked}
                      onChange={props.onSelect} />
                  </div>
                  <div className='flex-auto'>
                    <h4 className='m0'>{mod.name}</h4>
                    <div className='h5'>{mod.description}</div>
                    <div className='h6'>v{mod.version}</div>
                  </div>
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

}

export default Modules

