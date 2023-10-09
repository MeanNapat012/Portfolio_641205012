var i = 0;
function  postFunction()
{
    var topicFirst = document.getElementById("text1").value;
    if(i == 0)
    {
        document.getElementById("topic1").innerHTML = topicFirst;
        i++;
    }
    else if(i == 1)
    {
        document.getElementById("comment1").innerHTML = topicFirst;
        i++;
    }
    else if(i == 2)
    {
        document.getElementById("comment2").innerHTML = topicFirst;
        i++;
        
    }

}

function clearFunction()
{

    document.getElementById("topic1").innerHTML = "";
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
    i = 0;
}