function telephoneCheck(str) {
  let format = /^(1 ?)?((\d{3})|(\(\d{3}\)))( |-)?\d{3}( |-)?\d{4}$/
  return format.test(str)
}

telephoneCheck("555-555-5555");
