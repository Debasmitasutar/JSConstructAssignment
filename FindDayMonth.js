let day = 13;
let month = 7;
if(month>=3 && month<=6 && day>=1 && day<=31)
{
    if((month==3 && day>20) ||(month==4 && (day>=1 && day<=30)) ||(month==5 && (day>=1 && day<=31)|| (month==6 && day>20)))
    {
        console.log("true");
    }    
    else
    {
        console.log("false");
    }
}
else
{
    console.log("false");
}