function main(arg) {
    let uni = ""
    let pue = ""
    let unis = []
    let pues = ["ぷえ〜", "ぷぇ〜", "ぷえー", "ぷぇー", "ぷえっ", "ぷぇっ", "ぷっえ", "ぷ〜え", "ぷーえ", "ぷ〜ぇ"]
    let result = []
    console.log(arg)
    console.log(arg.length)
    for (let i = 0; i < arg.length; i++) {
        console.log(i)
        uni = arg.codePointAt(i)
        console.log(uni)

        uni = "1000" + String(uni)
        uni = uni.slice(uni.length - 5, uni.length)
        console.log(uni)
        for (let s = 0; s < String(uni).length; s++) {
            console.log(uni)
            console.log(s)
            console.log(uni[s])
            result.push(pues[String(uni)[s]])
            if (Math.floor(Math.random() * 9) + 1 === 1) {
                result.push("(∩ ๑•﹏•๑｀∩)")
            }
        }
        //result.push("///")
    }
    console.log(result.join(''))
    return result.join('')
}



function reverse(arg2) {
    let arg3 = arg2.replace('(∩ ๑•﹏•๑｀∩)', '')
    while (arg3 !== arg2) {
        arg2 = arg2.replace('(∩ ๑•﹏•๑｀∩)', '')
        arg3 = arg3.replace('(∩ ๑•﹏•๑｀∩)', '')
    }
    let pues = ["ぷえ〜", "ぷぇ〜", "ぷえー", "ぷぇー", "ぷえっ", "ぷぇっ", "ぷっえ", "ぷ〜え", "ぷーえ", "ぷ〜ぇ"]
    let pue = []
    let result_array = []
    let ichiji = ""
    let arg_length = arg2.length - 1
    let uni_array = []
    let result = ""

    console.log(arg2)
    for (let i = 0; i < arg_length / 15; i++) {
        console.log(i)
        for (let i2 = 0; i2 < 5; i2++) {
            ichiji = arg2.slice(0, 3)
            result_array.push(pues.indexOf(ichiji))
            arg2 = arg2.slice(3, arg2.length + 1)
            console.log(arg2)
        }
        result_array.push("///")
    }
    result_array.pop()
    console.log(result_array)
    uni_array = result_array.join("").split("///")
    console.log(uni_array)
    for (let s = 0; s < uni_array.length; s++) {
        console.log(s)
        console.log(uni_array[s])
        result += String.fromCodePoint(uni_array[s])
    }

    /*for(let i5=0; i5<=result.indexOf('\n'); i5++){
    result = result.replace("\n", "<br>")
    }
    */

    console.log(result)
    return result
}