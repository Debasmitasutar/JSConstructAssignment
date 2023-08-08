let LeapYear = 2004;
if (LeapYear % 400 == 0 || (LeapYear % 4 == 0 && LeapYear % 100 != 0))
{
    console.log(LeapYear + " is a leap year");
}
else 
{
    console.log(LeapYear + " not a leap year");
}

