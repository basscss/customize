
import React from 'react'
import { Input, Row, Col } from 'rebass'

class Defaults extends React.Component {

  render () {
    let props = this.props
    let defaults = props.defaults
    return (
      <div>
        <h3>Defaults</h3>
        <p className='h5'>
          Note: custom property values must be valid CSS.
        </p>
        <Row>
          {defaults.map(function(def, i) {
            return (
              <Col key={i} xs={6} sm={12} md={6}>
                <Input
                  name={def.key}
                  label={def.key}
                  value={def.value}
                  onChange={props.onChange} />
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }

}

export default Defaults
