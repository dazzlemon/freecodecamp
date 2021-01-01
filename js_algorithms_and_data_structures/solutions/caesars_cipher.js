function rot13(str) {
  return str.replace(
    /[A-Z]/g,
    (x) => {
      let charCode = x.charCodeAt(0)
      charCode += charCode - 13 >= 'A'.charCodeAt(0) ? -13
                                                     : 13
      return String.fromCharCode(charCode)
    }
  )
}

rot13("SERR PBQR PNZC");
