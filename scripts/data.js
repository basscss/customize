
var fs = require('fs')
var path = require('path')
var info = require('get-module-info')
var basscss = require('basscss')
var postcss = require('postcss')

var dir = path.join(__dirname, '..')

function readModule (name) {
  var mod = info(name, { dirname: dir })
  return {
    name: mod.name,
    css: mod.css,
    version: mod.version,
    description: mod.description
  }
}

function readDefaults (name) {
  var obj = {}
  var arr = []
  var mod = info(name, { dirname: dir })
  var css = mod.css
  var root = postcss.parse(css)
  root.eachDecl(function(d) {
    var key = d.prop.replace(/^\-\-/, '')
    obj[key] = d.value
    arr.push({
      key: key,
      value: d.value
    })
  })
  return arr
}

var data = {
  modules: basscss.modules.map(readModule),
  optionals: basscss.optional_modules.map(readModule),
  defaults: readDefaults(basscss.variables[0]),
}

fs.writeFileSync(path.join(__dirname, '../data.json'), JSON.stringify(data))

