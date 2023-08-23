let btn = document.querySelector(".suggestion-btn");
let form = document.querySelector(".gift-form");

btn.addEventListener("click",()=>{
    if ((document.querySelector("#interest").value=="gaming" || document.querySelector("#interest").value=="Gaming") && document.querySelector("#budget").value>=2000){
        form.setAttribute("action","gaming1.html");
    }
    if ((document.querySelector("#interest").value=="gaming" || document.querySelector("#interest").value=="Gaming") && document.querySelector("#budget").value<2000){
        form.setAttribute("action","gaming2.html");
    }
    if ((document.querySelector("#interest").value=="sports" || document.querySelector("#interest").value=="Sports") && document.querySelector("#budget").value<2000){
        form.setAttribute("action","sports1.html");
    }
    if ((document.querySelector("#interest").value=="sports" || document.querySelector("#interest").value=="Sports") && document.querySelector("#budget").value>=2000){
        form.setAttribute("action","sports2.html");
    }
    if ((document.querySelector("#interest").value=="music" || document.querySelector("#interest").value=="Music") && document.querySelector("#budget").value<2000){
        form.setAttribute("action","music1.html");
    }
    if ((document.querySelector("#interest").value=="music" || document.querySelector("#interest").value=="Music") && document.querySelector("#budget").value>=2000){
        form.setAttribute("action","music2.html");
    }
    if ((document.querySelector("#interest").value=="cooking" || document.querySelector("#interest").value=="Cooking") && document.querySelector("#budget").value<2000){
        form.setAttribute("action","cooking1.html");
    }
    if ((document.querySelector("#interest").value=="cooking" || document.querySelector("#interest").value=="Cooking") && document.querySelector("#budget").value>=2000){
        form.setAttribute("action","cooking2.html");
    }
    if (document.querySelector("#interest").value=="creativity" || document.querySelector("#interest").value=="Creativity"){
        form.setAttribute("action","creativity.html");
    }
})