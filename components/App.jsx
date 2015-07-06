
import React from 'react'
import { findIndex } from 'lodash'
import css from 'basscss.github.io/css/base.css'
import Header from 'basscss.github.io/components/PageHeader.jsx'
import Footer from 'basscss.github.io/components/Footer.jsx'
import { CarbonAd } from 'blk'
import { Row, Col } from 'rebass'
import Modules from './Modules.jsx'
import Defaults from './Defaults.jsx'
import Css from './Css.jsx'

class App extends React.Component {

  constructor () {
    super ()
    this.selectModule = this.selectModule.bind(this)
    this.selectAll = this.selectAll.bind(this)
    this.selectNone = this.selectNone.bind(this)
    this.handlePropertyChange = this.handlePropertyChange.bind(this)
    this.state = {
      defaults: [],
      activeModules: []
    }
  }

  selectModule (e) {
    let active = this.state.activeModules
    let modules = this.props.modules
    let index = findIndex(modules, { name: e.target.name })
    if (index > -1) {
      let activeIndex = active.indexOf(index)
      if (activeIndex > -1) {
        active.splice(activeIndex, 1)
      } else {
        active.push(index)
      }
      active.sort(function(a, b) {
        return a - b
      })
      this.setState({ activeModules: active })
    }
  }

  selectAll (e) {
    let active = []
    let modules = this.props.modules
    modules.forEach(function(mod, i) {
      active.push(i)
    })
    this.setState({ activeModules: active })
  }

  selectNone (e) {
    this.setState({ activeModules: [] })
  }

  handlePropertyChange (e) {
    let defaults = this.state.defaults
    let index = findIndex(defaults, { key: e.target.name })
    if (index > -1) {
      defaults[index].value = e.target.value
      this.setState({ defaults: defaults })
    }
  }

  componentDidMount () {
    this.setState({ defaults: this.props.defaults })
  }

  render () {
    let props = this.props
    let state = this.state
    return (
      <div className='px3'>
        <Header {...props}
          meta={<CarbonAd />} />
        <Row>
          <Col sm={6} md={4}>
            <Modules {...props}
              {...state}
              onSelect={this.selectModule}
              selectAll={this.selectAll}
              selectNone={this.selectNone} />
          </Col>
          <Col sm={6} md={4}>
            <Defaults {...props}
              {...state}
              onChange={this.handlePropertyChange} />
          </Col>
          <div className='clearfix md-hide' />
          <Col md={4}>
            <Css {...props} {...state} />
          </Col>
        </Row>
        <Footer {...props} wide />
      </div>
    )
  }

}

export default App

