const path = require('path')
const requireHacker = require('require-hacker')

requireHacker.hook('svg', filename => {
    return requireHacker.to_javascript_module_source(`#${path.parse(filename).name}`)
})
