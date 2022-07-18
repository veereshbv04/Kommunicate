
// Complete the following  javascript function that accepts the url and the parameter name and returns the value of that parameter.


var url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby"

// WORKING CODE

function getUrlParameterValue(url, parameter) {

    const arr = url.split("&")
    let res = []

    for (let el of arr) {
        if (el.includes(parameter)) {
            res = el.split("=")
        }
    }

    return res.pop()
}

// TESTING THE CODE FOR BELOW INPUTS
console.log(getUrlParameterValue(url, 'utm_medium'))
console.log(getUrlParameterValue(url, 'utm_campaign'))
