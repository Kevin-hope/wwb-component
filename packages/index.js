const modules = {}
const files = require.context('../packages', true, /\.vue$/)
files.keys().forEach(key => {
  const name = files(key).default.name
  modules[name] = files(key).default || files(key)
})

export default modules
