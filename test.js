'use strict'

const test = require('tap').test
const beeStringUtils = require('./')

test('check if is valid email', t => {
  t.plan(5)
  t.equal(beeStringUtils.isValidEmail('davide.dantonio@webeetle.com'), true)
  t.equal(beeStringUtils.isValidEmail('davide.dantonio@webeetle'), false)
  t.equal(beeStringUtils.isValidEmail('davide.webeetle'), false)
  t.equal(beeStringUtils.isValidEmail('davide.webeetle@gmail'), false)
  t.equal(beeStringUtils.isValidEmail('davide.webeetle@gmail.com'), true)
})

test('check if string is valid number', t => {
  t.plan(22)
  t.equal(beeStringUtils.isValidNumber(5e3), true)
  t.equal(beeStringUtils.isValidNumber(0xff), true)
  t.equal(beeStringUtils.isValidNumber(-1.1), true)
  t.equal(beeStringUtils.isValidNumber(0), true)
  t.equal(beeStringUtils.isValidNumber(1), true)
  t.equal(beeStringUtils.isValidNumber(1.1), true)
  t.equal(beeStringUtils.isValidNumber(10), true)
  t.equal(beeStringUtils.isValidNumber(10.10), true)
  t.equal(beeStringUtils.isValidNumber(100), true)
  t.equal(beeStringUtils.isValidNumber('-1.1'), true)
  t.equal(beeStringUtils.isValidNumber('0'), true)
  t.equal(beeStringUtils.isValidNumber('012'), true)
  t.equal(beeStringUtils.isValidNumber('0xff'), true)
  t.equal(beeStringUtils.isValidNumber('1'), true)
  t.equal(beeStringUtils.isValidNumber('1.1'), true)
  t.equal(beeStringUtils.isValidNumber('10'), true)
  t.equal(beeStringUtils.isValidNumber('10.10'), true)
  t.equal(beeStringUtils.isValidNumber('100'), true)
  t.equal(beeStringUtils.isValidNumber('5e3'), true)
  t.equal(beeStringUtils.isValidNumber(parseInt('012')), true)
  t.equal(beeStringUtils.isValidNumber(parseFloat('012')), true)
  t.equal(beeStringUtils.isValidNumber('ciao ciao'), false)
})

test('check UC first letter', t => {
  t.plan(4)
  t.strictEqual(beeStringUtils.ucFirstLetter('davide'), 'Davide')
  t.strictEqual(beeStringUtils.ucFirstLetter(null), '')
  t.strictEqual(beeStringUtils.ucFirstLetter(''), '')
  t.strictEqual(beeStringUtils.ucFirstLetter(undefined), '')
})

test('chekc if string ends with', t => {
  t.plan(4)
  t.strictEqual(beeStringUtils.endsWith('a/b/c.txt', 'c.txt'), true)
  t.strictEqual(beeStringUtils.endsWith('a/b/c.txt', '.txt'), true)
  t.strictEqual(beeStringUtils.endsWith('abc', 'c'), true)
  t.strictEqual(beeStringUtils.endsWith(['a', 'b', 'c.txt'], 'c.txt'), true)
})
