'use strict'

const isNumber = require('is-number')

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const isValidNumber = string => {
  return isNumber(string)
}

const ucFirstLetter = string => {
  if (!string) {
    return ''
  }

  return string.charAt(0).toUpperCase() + string.slice(1)
}

const endsWith = (string, suffix) => {
  if (Array.isArray(string) && suffix) {
    return string[string.length - 1] === suffix
  }

  if (typeof suffix === 'number') {
    suffix = '' + suffix
  }

  if (typeof suffix !== 'string') {
    return false
  }

  return string.slice(-suffix.length) === suffix
}

module.exports = {
  isValidEmail,
  isValidNumber,
  ucFirstLetter,
  endsWith
}
