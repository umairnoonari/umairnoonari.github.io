var majorityElement = function(nums) {
    let M=1;
    let N;
    if(nums.length!=1)
    {
        for(let i=0;i<nums.length;i++)
        {
            let count=i+1
            let k=1
            while(count<nums.length)
            {
                if(nums[i]==nums[count])
                    k++;
                if(k>M)
                {
                    N=nums[i]
                    M=k
                }
                count++
            }
        }
        return N
    }
    else
    {
        return nums[0]
    }

};
console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))
console.log(majorityElement([1]))