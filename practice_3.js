var removeDuplicates = function(nums) {
    for(let i=0;i<nums.length;i++)
    {
        let l=i+1
        while(nums[i]==nums[l]&&l<nums.length)
        {
            nums.splice(l,1)
            while(nums[i]===nums[l])
            {
                nums.splice(l,1)
            }
            l++;
        }
    }
    let k=nums.length
    return nums
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([1,1,1,1]))
