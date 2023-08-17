function sendmail()
{
    
    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let message= document.getElementById("comment").value;


     let body = `From: ${name + " - " +email} <br> Message: ${message}`;


    Email.send({
        SecureToken:"231f7eb7-9bf3-4a73-8b12-1dbb0444e337",
        To : "saepulloh2512@gmail.com",
        From: "saepulloh2512@gmail.com",
        Subject: "Web Portofolio Epul",
        Body:body,
    }).then(
        message =>{
           
            if(message=='OK'){
            alert('Your Message Successfully Delivered!');
            }
            else{
                console.error (message);
                alert('There is error at sending e-mail. ')
                
            }
        }
    );
}
