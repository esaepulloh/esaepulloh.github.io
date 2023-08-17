function sendmail()
{
    
    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let message= document.getElementById("comment").value;


     let body = `From: ${name + " - " +email} <br> Message: ${message}`;


    Email.send({
        SecureToken:"15c922db-1203-4ee3-8aea-88f576807ff0",
        To : "",
        From: "",
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