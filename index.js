'use strict'

const isNumber = require('is-number')

const isValidEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const isValidNumber = string => {
  return isNumber(string)
}

const ucFirstLetter = string => {
  if (string === '') {
    return string
  }

  return string.charAt(0).toUpperCase() + string.slice(1)
}

const endWith = (string, searchString) => {
  if (Array.isArray(string) && searchString) {
    return string[string.length - 1] === searchString;
  }

  if (typeof searchString === 'number') {
    searchString = '' + searchString
  }

  if (typeof searchString !== 'string') {
    return false
  }

  return string.slice(-searchString.length) === searchString
}

module.exports = {
  isValidEmail,
  isValidNumber,
  ucFirstLetter,
  endWith
}