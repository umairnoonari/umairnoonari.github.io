var removeDuplicates = function(nums) {
    for(let i=0;i<nums.length;i++)
    {
        let l=nums.length
        let h=1
        for(let j=i+1;j<l;j++)
        {
            if(nums[i]==nums[j])
            {
                h++;
                if(h>=3)
                {
                    j=j-1;
                    nums.splice(j,1)
                }
            }
        }
    }
    return nums
};
console.log(removeDuplicates([1,1,1,1,2,2,3]))
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))