// var merge = function(nums1, m, nums2, n) {
//     let num1=[]
//     let num3=[]
//     let count=0;
//     for(let i=0;i<(m+n);i++)
//     {
//         if(nums1[i]>=1)
//         {
//             num1[count]=nums1[i]
//             count++;
//         }
//     }
//     for(let i=0;i<nums2.length;i++)
//     {
//         num1.push(nums2[i])
//     }
//     let temp=0;
//     for(let i=0;i<num1.length;i++)
//     {
//         if(num1[i]>=num1[i+1])
//         {
//             temp=num1[i]
//             num1[i]=num1[i+1]
//             num1[i+1]=temp
//         }
//     }
//     nums1=num1
//     return(num1)

// };
// var merge = function(nums1, m, nums2, n) {
//     let temp=0
//     let count=0
//     for(let i=0;i<(m+n);i++)
//     {
//         if(nums1[i]===0)
//         {
//             if(nums2[count]>=1)
//             {
//                 nums1[i]=nums2[count]
//                 count++
//             }
//         }
//     }
//     console.log(nums1)
//     for(let i=0;i<(m+n);i++)
//     {
//         temp=0
//         for(let j=i+1;j<(m+n);j++)
//         {
//             if(nums1[i]>=nums1[j])
//             {
//                 temp=nums1[i]
//                 nums1[i]=nums1[j]
//                 nums1[j]=temp
//             }
//         }
//     }
//     return nums1
// };
//Coped from internet
var merge = function(nums1, m, nums2, n) {
    let num1Length = m-1;
    let num2Length = n-1;
    
    for(let i=nums1.length-1; i>=0; i--){
        if(nums1[num1Length]>=nums2[num2Length]){
            nums1[i] = nums1[num1Length];
            num1Length--;
        }else if(num2Length>=0){
            nums1[i] = nums2[num2Length];
            num2Length--;
        }
    }  
    return nums1
  };
  let num1=[]
  let nums1 = [0,0,3,0,0,0,0,0,0], m = 3, nums2 = [-1,1,1,1,2,3], n = 6;
  for(let i=nums2.length-1;i>=0;i--)
  {
      if(nums2[i]<0)
      {
         continue
      }
      num1[i]=nums2[i]
  }
  console.log(num1)
//   console.log(merge(nums1, m, nums2, n));
// //   console.log(nums1);
// console.log(merge([4,5,6,0,0,0],3,[1,2,3],3))
// console.log([1,2,3,0,0,0].length)