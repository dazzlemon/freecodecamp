let convertToRoman = (num) => {
    let romanNumerals = {
        '1' : 'I',
        '4' : 'IV',
        '5' : 'V',
        '9' : 'IX',
        '10' : 'X',
        '40' : 'XL',
        '50' : 'L',
        '90' : 'XC',
        '100' : 'C',
        '400' : 'CD',
        '500' : 'D',
        '900' : 'CM',
        '1000' : 'M'
    };
    let roman = ''

    let romanKeySorted = Object.getOwnPropertyNames(romanNumerals)
                            .reverse()
                            .map((x) => parseInt(x))

    for (let i = 0; i < romanKeySorted.length; i++) {
        let r = romanKeySorted[i]
        while (num >= r) {
            num -= r
            roman += romanNumerals[r.toString()]
        }
    }
    return roman
}

convertToRoman(36);
