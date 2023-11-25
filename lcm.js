function checkLcm(text1,text2){
    let text1Arr = text1.toLowerCase().split('')
    
    let count = 0

    for(char of text1Arr){
        if(text2.toLowerCase().includes(char)){
            count++
        }
    }

    console.log(count)
}

let text1 = 'abcde'
let text2 = 'ace'

checkLcm(text1,text2)