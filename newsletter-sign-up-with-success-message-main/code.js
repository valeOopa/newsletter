"use strict";


document.querySelector(".input-submit").addEventListener("click",e=>{
    const email = document.querySelector(".input-email");
    e.preventDefault();
    

    let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(validEmail.test(email.value)){
        email.classList.remove('email-error');
        document.getElementById("principal-article").style.display = "none";
        document.getElementById("message").style.display = 'flex';
        document.getElementById("current-mail").textContent = email.value;
        const dismissButton = document.getElementById("message__btn");
        dismissButton.addEventListener("click",()=>{
            const messageDiscarded = document.createElement("P");
            messageDiscarded.textContent = "Message discarded.";
            messageDiscarded.id = "text-discarded";
            document.getElementById("container-btn").appendChild(messageDiscarded);
            dismissButton.style.display = "none";
            setTimeout(()=>window.location.reload(),1500);
        });
        return true;
    }else{
        const errorText = document.getElementById("text-container__status");
        const textNode = document.createTextNode("Valid email required");
        errorText.appendChild(textNode);
        email.classList.add('email-error');
        return false;
    };
});