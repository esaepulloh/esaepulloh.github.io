function sendmail(e)
{
    e.preventDefault()
    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let message= document.getElementById("comment").value;
    let body = '<br>Name: ' + name +"<br>Email: " +email + "<br>Message: " + message

    Email.send({
        SecureToken:"231f7eb7-9bf3-4a73-8b12-1dbb0444e337",
        To : "saepulloh2512@gmail.com",
        From: "saepulloh2512@gmail.com",
        Subject: "Web Portofolio",
        Body:body,
    }).then(
        message =>{

            if(message=='OK'){
            alert('Your Message Successfully Delivered!');
            }
            else{
                console.error (message);
                alert('There is error at sending e-mail.') 
            }
        }
    );
}

function reset () {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";
    }

document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
    sendmail(e);
    reset();
    return false;
    })