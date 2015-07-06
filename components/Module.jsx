
import React from 'react'

class Module extends React.Component {

  render () {
    let props = this.props
    let mod = props.module
    let optional = mod.optional ? <span className='h6 regular black'>Optional</span> : false
    let styles = {
      label: {
        cursor: 'pointer'
      }
    }
    return (
      <label className={[
          'py1 flex flex-center',
          (props.checked ? 'bg-aqua' : '')
        ].join(' ')}
        style={styles.label}>
        <div className='mr1'>
          <input type='checkbox'
            name={mod.name}
            checked={props.checked}
            onChange={props.onSelect} />
        </div>
        <div className='flex-auto'>
          <h4 className='m0'>{mod.name} {optional}</h4>
          <div className='h5'>{mod.description}</div>
          <div className='h6'>v{mod.version}</div>
        </div>
      </label>
    )
  }

}

export default Module

