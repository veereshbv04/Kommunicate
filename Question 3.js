//Write a javascript function that prints the reverse of a number. Example: if the number is 149, then output should be 941


var num = 149

function reverseNumber(num) {
    const strNumber = num.toString()
    let res = ""
    console.log(strNumber)
    for (let i = strNumber.length - 1; i >= 0; i--) {
        res += strNumber[i]
    }
    return res
}



console.log(reverseNumber(num))