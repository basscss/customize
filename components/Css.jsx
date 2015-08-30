
import React from 'react'
import postcss from 'postcss'
import cssImport from 'postcss-import'
import customMedia from 'postcss-custom-media'
import customProperties from 'postcss-custom-properties'
import calc from 'postcss-calc'
import colorFunction from 'postcss-color-function'
import cssstats from 'cssstats'
import filesize from 'filesize'

let removeComments = postcss.plugin('remove-comments', function(opts) {
  opts = opts || {}
  return function(root) {
    root.eachComment(function(comment) {
      comment.removeSelf()
    })
  }
})

let removeRoot = postcss.plugin('remove-root', function(opts) {
  opts = opts || {}
  return function(root) {
    root.eachRule(function(rule) {
      if (rule.selector === ':root') {
        rule.removeSelf()
      }
    })
  }
})

class Css extends React.Component {

  render () {
    let props = this.props
    let modules = props.modules
    let active = props.activeModules
    let defaults = props.defaults
    let defaultsObj = {}
    defaults.forEach(function(def) {
      defaultsObj[def.key] = def.value
    })

    let source = active.map(function(index) {
      return modules[index].css
    })

    let compiled = postcss()
      .use(cssImport())
      .use(customMedia())
      .use(customProperties({
        strict: false,
        variables: defaultsObj
      }))
      .use(calc())
      .use(colorFunction())
      .use(removeComments())
      .use(removeRoot())
      .process(source.join(' '))
      .css

    let stats = cssstats(compiled)

    let css = [
      '/*',
      '',
      '  Basscss',
      '  http://basscss.com',
      '',
      '  ' + filesize(stats.gzipSize),
      '  ' + stats.rules.length + ' Rules',
      '  ' + stats.selectors.length + ' Selectors',
      '  ' + stats.declarations.all.length + ' Declarations',
      '  Generated with http://basscss.com/customize',
      '',
      '*/',
      compiled
    ].join('\n')

    let blob = new Blob([css], { type: 'text/plain' })
    let download = (window.URL || window.webkitURL).createObjectURL( blob )

    let styles = {
      pre: {
        minHeight: '100vh',
        maxHeight: '220vh',
        margin: 0
      }
    }

    return (
      <div>
        <div className='flex flex-center'>
          <h3 className='flex-auto'>CSS</h3>
          <div className=''>
            <a href={download}
              download='basscss-custom.css'
              className='btn btn-primary'>
              Download
            </a>
          </div>
        </div>
        <div className='border'>
          <pre dangerouslySetInnerHTML={{ __html: css }}
            style={styles.pre} />
        </div>
      </div>
    )
  }

}

export default Css

