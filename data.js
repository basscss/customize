
import pkg from 'basscss/package.json'
import modules from './data.json'

let optionals = modules.optionals.map(function(mod) {
  mod.optional = true
  return mod
})

export default {
  title: 'Customize',
  path: '/customize',
  version: pkg.version,
  modules: modules.modules.concat(optionals),
  defaults: modules.defaults
}

