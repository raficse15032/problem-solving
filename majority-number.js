
function checkMagorityNumber(nums){

    let charMap = {}

    for(num of nums){
        if(charMap[num]){
            charMap[num]++
        }
        else{
            charMap[num] = 1
        }
    }

    let max = 0
    let maxChar = 0

    for(char in charMap){
        if(charMap[char] > max){
            maxChar = char
            max = charMap[char]
        }
    }

    console.log(maxChar)

}

let nums = [1,1,1,2,2,3,3,3]
checkMagorityNumber(nums)