function sendmail()
{
    
    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let message= document.getElementById("comment").value;


     let body = `From: ${name + " - " +email} <br> Message: ${message}`;


    Email.send({
        SecureToken:"f524097e-8cf6-4b8e-a488-097e4d334561",
        To : "saepulloh2512@gmail.com",
        From: "saepulloh2512@gmail.com",
        Subject: "Hotel Booking Status",
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
