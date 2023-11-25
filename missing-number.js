function checkMissingNumber(nums){
    for(let i=0; i<= nums.length; i++){
        if(!nums.includes(i)){
            console.log(i)
            return
        }
    }
    return
}

let nums = [9,6,4,2,3,5,7,0,1]

checkMissingNumber(nums)