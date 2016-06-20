'use strict'

const expect = require('chai').expect
const bench = require('..')

describe('#bench', () => {
  it('should be able to benchmark a function', (done) => {
    const res = bench('# test 1', () => {})

    expect(res).to.be.a('promise')

    res.then(time => {
      expect(time).to.be.a('array')
      done()
    })
  })

  it('should be able to benchmark a function asynchronously', (done) => {
    const res = bench('# test 2', function () {
      const end = this.async()
      setTimeout(end, 10)
    })

    expect(res).to.be.a('promise')

    res.then(time => {
      expect(time).to.be.a('array')
      done()
    })
  })

  it('should be able to receive arguments', (done) => {
    const val = 5
    const res = bench('# test 3', (x) => {
      expect(x).to.equals(val)
    }, val)

    expect(res).to.be.a('promise')

    res.then(time => {
      expect(time).to.be.a('array')
      done()
    })
  })
})
