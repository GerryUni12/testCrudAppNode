function signup() {
    document.querySelector(".login-form-container").style.cssText = "display: none;";
    document.querySelector(".signup-form-container").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = "background-color: white;";
    document.querySelector("body").style.cssText = "background-color:rgb(0,0,0);";
    document.querySelector(".button-1").style.cssText = "display: none";
    document.querySelector(".button-2").style.cssText = "display: block";

};

function login() {
    document.querySelector(".signup-form-container").style.cssText = "display: none;";
    document.querySelector(".login-form-container").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = "background-color(255,255,255);";
    document.querySelector("body").style.cssText = "background-color: rgba(255,0,0,0.7);";
    document.querySelector(".button-2").style.cssText = "display: none";
    document.querySelector(".button-1").style.cssText = "display: block";

}

function getTime(){

for(let x = 0; x<250; x++)
{
const date = new Date();
document.querySelector(".dashTimeDate").innerHTML = date;
setTimeout(() => {  console.log("World!"); }, 1000);
}

}
