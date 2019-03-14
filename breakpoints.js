const breakpoints = require('./breakpoints.json')
const px = n => `${n}px`

module.exports = {
  breakpoints: Object.values(breakpoints).sort().map(px),
  maxWidths: Object.entries(breakpoints).reduce((maxWidths, [key, n]) => {
    maxWidths[key] = px(n)
    return maxWidths
  }, {})
}
