var count = 0
function fun()
{
    count = count + 1
    if(count%2 === 0)
    {
        console.log('entered');
        document.getElementById('hide').style.transform = "translatex(-100%)"
        console.log('executed');
    }
    else
    {
        document.getElementById('hide').style.transform = "translatex(0%)"
        console.log('else');
    }
}