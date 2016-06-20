'use strict'

exports = module.exports = bench

function bench(name, func, args) {
  args = Array.from(arguments).slice(2)

  return new Promise(resolve => {
    let isAsync = false
    const ctx = {
      async() {
        isAsync = true
        return end
      }
    }

    const start = process.hrtime()
    func.apply(ctx, args)
    if (!isAsync) end()

    function end() {
      resolve(process.hrtime(start))
    }
  })
}
