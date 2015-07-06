
import React from 'react'
import css from 'basscss.github.io/css/base.css'
import Container from 'babel-loader!basscss.github.io/components/Container.jsx'
import Header from 'babel-loader!basscss.github.io/components/PageHeader.jsx'
import Footer from 'babel-loader!basscss.github.io/components/Footer.jsx'
import Modules from './Modules.jsx'
import Defaults from './Defaults.jsx'
import Css from './Css.jsx'

class App extends React.Component {

  constructor () {
    super ()
    this.selectModule = this.selectModule.bind(this)
    this.handlePropertyChange = this.handlePropertyChange.bind(this)
  }

  selectModule (e) {
    console.log(e.target.name, e.target.value)
  }

  handlePropertyChange (e) {
    console.log(e.target.name, e.target.value)
  }

  render () {
    let props = this.props
    let state = this.state
    return (
      <div className='px3'>
        <Header {...props} />
        <Modules {...props}
          {...state}
          onSelect={this.selectModule} />
        <Defaults {...props}
          {...state}
          onChange={this.handlePropertyChange} />
        <Css {...props} {...state} />
        <Footer {...props} wide />
      </div>
    )
  }

}

export default App

