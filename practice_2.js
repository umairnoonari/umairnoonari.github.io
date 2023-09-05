var removeElement = function(nums, val) {
    let k=nums.length
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]===val)
        {
        while(nums[i]===val)
        {
            k--
            for(let j=i;j<nums.length;j++)
            {
                nums[j]=nums[j+1]
                if(nums[j]==undefined)
                {
                    nums.pop()
                }
            }
        }

    }
    }
    return nums
};
console.log(removeElement([0,1,2,2,3,0,4,2],2))
