const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let firstPassword= document.getElementById("first-password")
let secondPassword= document.getElementById("second-password")
    let first=""
    let second=""    
function generatePassword(){
   
    first=""
    second=""
    for(let i=0 ;i<16 ;i++){
        first+=characters[Math.floor(Math.random()*characters.length)]
        second+=characters[Math.floor(Math.random()*characters.length)]
    }
    firstPassword.textContent=first
    secondPassword.textContent=second
}

function copyToClipboard(elementId) {
    let element =document.getElementById(elementId)
    let tempEl = document.createElement("input")
  document.body.appendChild(tempEl)
  tempEl.value=element.textContent
  tempEl.select()
  document.execCommand("copy");
  document.body.removeChild(tempEl)
}
