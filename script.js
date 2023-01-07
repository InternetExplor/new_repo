const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")


setInterval(() => {
    let i = 0
    let secunds = document.getElementById("secunds")
    i++
    secunds.innerHTML = parseInt(i + parseInt(secunds.innerHTML)) 
}, 1000);

document.addEventListener("keydown", function(){
    jump()
})

function jump() {
    

    if(dino.classList != "jump"){
        dino.classList.add("jump")
        
    }
    setTimeout(function(){
        dino.classList.remove("jump")
    }, 557)
    
}

let death = setInterval(() => {
  let  dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
   let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cactusLeft < 140 && cactusLeft > 70 && dinoTop >= 320){
        alert("СМЕРТЬ НАСТИГЛА ТВОЕГО ГЕРОЯ")
        location.reload()
    }
}, 10);