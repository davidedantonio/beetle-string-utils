# beetle-string-utils

This module contains some utils for string:

- Check if an email is a valid email
- Check if string end with specified suffix
- Check if a string is a valid number
- Transform a given string with UC first letter

## Install

```
npm install --save @davide-demos/beetle-string-utils
```

## API

```
endsWith(string, suffix) => Boolean

ucFirstLetter(string) => String

isValidNumber(string) => Boolean

isValidEmail(string) => Boolean
```

## Examples

```
const beeStringUtils = require('@davide-demos/beetle-string-utils')

if (beeStringUtils.isValidEmail('davide.dantonio@webeetle.com')) {
  // do something
}

console.log(beeStringUtils.ucFirstLetter('davide')) // Davide

if (beeStringUtils.isValidNumber('12.22')) {
  // do something
}

if (beeStringUtils.endsWith('davide', 'de')) {
  // do something
}
```

## LICENSE

Licensed under [MIT](./LICENSE)