function palindrome(str) {
  let right = str
                .toLowerCase()
                .replace(/[^a-z0-9]/g, '')
                .split('')
  
  let left = right.splice(0, right.length / 2)
  if (left.length != right.length)
    right.shift()
  
  return arrCmp(left, right.reverse())
}

let arrCmp = (a, b) => Array.isArray(a)
                    && Array.isArray(b)
                    && a.length === b.length
                    && a.every((val, index) => val === b[index])

palindrome("eye");
