function prime(num)
{
    const flag=true
    for(let i=2;i<num;i++)
    {
        if(num%i!=0)
        {
            flag=true
        }
    }
    if(flag===true)
    {
        console.log("Prime")
    }
}
function Prime(num)
{
    let flag=true
    for (let index = 2; index < num; index++) {
        if(num%index===0)
        {
            flag=false
            break
        }
    }
    if(flag===true)
    {
        console.log("Prime")
    }
    else
    {
        console.log("not Prime")
    }dslkdlsa
}
Prime(7)