// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  process(sourceText, sourcePath, options) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
    }
  },
}
