const nums = [1,2,3,4,5,6,7,8,9,];

const part = nums.slice(2, 6);  /*[2 no. position theke 6 no. porjonto nibe | 6 no. position noi]*/
console.log(part);
console.log(nums);

const removed = nums.splice(2,6, 41);  /*[2 no. position theke 6 ta number kete nibe| new kichu add korte chaile kora jabe]*/
console.log(removed);
console.log(nums);

const together = nums.join("ami");
console.log(together);