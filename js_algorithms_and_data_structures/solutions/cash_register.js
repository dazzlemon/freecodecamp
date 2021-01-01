function checkCashRegister(price, cash, cid) {
  let currencyUnits = {
    'PENNY': 0.01,
    'NICKEL' : 0.05,
    'DIME' : 0.1,
    'QUARTER' : 0.25,
    'ONE' : 1,
    'FIVE' : 5,
    'TEN' : 10,
    'TWENTY' : 20,
    'ONE HUNDRED' : 100
  }

  let changeDue = cash - price
  let cidSum = cid
                .reduce(
                  (sum, x) => sum + x[1], 0
                )

  let returnObj = {
    status: changeDue > 0
            && cidSum > changeDue ? 'OPEN'
                                  : cidSum == changeDue ? 'CLOSED'
                                                        : 'INSUFFICIENT_FUNDS',
    change: []
  }
  
  if (returnObj.status == 'OPEN') {
    //try give change
    for (let i = cid.length - 1; i >= 0; i--) {
      returnObj.change.push([cid[i][0], 0])
      while (changeDue && cid[i][1] && changeDue >= currencyUnits[cid[i][0]]) {
        changeDue -= currencyUnits[cid[i][0]]
        cid[i][1] -= currencyUnits[cid[i][0]]
        returnObj.change[returnObj.change.length - 1][1] += currencyUnits[cid[i][0]]
        changeDue = parseFloat(changeDue.toFixed(2))
      }
    }
    returnObj.change = returnObj.change
                                  .filter((x) => x[1])
    let changeSum = returnObj.change
                              .reduce((sum, x) => sum + x[1], 0)
    changeSum = parseFloat(changeSum.toFixed(2))
    if (changeSum != cash - price) {
      returnObj.change = []
      returnObj.status = 'INSUFFICIENT_FUNDS'
    }
  }

  if (returnObj.status == 'CLOSED')
    returnObj.change = cid

  return returnObj
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
