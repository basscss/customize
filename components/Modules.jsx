
import React from 'react'
import { findIndex } from 'lodash'
import { Btn } from 'rebass'
import Module from './Module.jsx'

class Modules extends React.Component {

  render () {
    let props = this.props
    let mods = props.modules
    let active = props.activeModules

    let styles = {
      btn: {
        padding: '4px 4px'
      }
    }

    return (
      <div>
        <div className='flex flex-baseline'>
          <h3 className='flex-auto'>Modules</h3>
          <div>
            <button className='h6 btn blue'
              style={styles.btn}
              onClick={props.selectAll}>
              Select All
            </button>
            <button className='h6 btn blue'
              style={styles.btn}
              onClick={props.selectNone}>
              Select None
            </button>
          </div>
        </div>
        <ul className='list-reset border-top'>
          {mods.map(function(mod, i) {
            let checked = active.indexOf(i) > -1
            return (
              <li key={i} className='border-bottom'>
                <Module {...props}
                  module={mod}
                  checked={checked} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

}

export default Modules

