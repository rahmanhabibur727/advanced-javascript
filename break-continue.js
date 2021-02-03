const nums = [1,2,3,4,5,6,7,8,9,10,-5,-7,-9,-3,15,17];
for(let i=0; i<nums.length; i++){
    // console.log(nums[i]);  /*[condition set korar aage call korle 1 position besi gia output dekhabe]*/
    if(nums[i]>5){
        break;
    }
    // console.log(nums[i]);  /*[condition set korar pore call korle 1 position besi jabena okhanei output dekhabe]*/
}

for(let i=0; i<nums.length; i++){
if(nums[i]<0){
    continue;
}

    console.log(nums[i]); 
}